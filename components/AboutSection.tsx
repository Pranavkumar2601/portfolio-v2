"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type PanInfo,
  type Transition,
} from "framer-motion";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  FlaskConical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { modernColors } from "@/data/education";

/* -------------------------------------------------------------------------- */
/*  Content. Edit the values below; no JSX changes needed.                      */
/*  Keep each card to a heading and 2–3 rows so the deck stays compact.         */
/* -------------------------------------------------------------------------- */

const AVAILABILITY_STATUS = "Immediately available";
const OPEN_TO = "Open to full-time Software Engineer roles";

type FactRow = { label: string; value: string };

type FactCard = {
  id: string;
  title: string;
  icon: LucideIcon;
  /** Which theme colour gives the card its subtle identity. */
  tint: "accent" | "secondary";
  rows: FactRow[];
};

const FACT_CARDS: FactCard[] = [
  {
    id: "experience",
    title: "Professional Experience",
    icon: Briefcase,
    tint: "accent",
    rows: [
      { label: "Role", value: "Software Engineer, LTM" },
      { label: "Domain", value: "Enterprise healthcare software" },
      { label: "Period", value: "Dec 2024 – Oct 2026 (1 yr 10 mos)" },
    ],
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    tint: "secondary",
    rows: [
      { label: "Master's", value: "MCA, PES University (GPA 7.79 / 10)" },
      { label: "Bachelor's", value: "BCA, IIMT College of Management" },
    ],
  },
  {
    id: "technical",
    title: "Technical Expertise",
    icon: Code2,
    tint: "accent",
    rows: [
      { label: "Programming", value: "Python, C#, SQL" },
      {
        label: "Frameworks",
        value: ".NET Core, ASP.NET Core Web API, Flask, FastAPI",
      },
      { label: "Tools & infrastructure", value: "Docker, AWS, Git, CI/CD" },
    ],
  },
  {
    id: "research",
    title: "Research & Projects",
    icon: FlaskConical,
    tint: "secondary",
    rows: [
      {
        label: "Published research",
        value: "Cricket player selection and performance analytics",
      },
      { label: "TripVault", value: "Cloud storage management platform" },
      {
        label: "Beyond the Boundary",
        value: "Machine learning-based cricket analytics",
      },
    ],
  },
];

const ABOUT_PARAGRAPHS = [
  "I'm a Software Engineer with an MCA from PES University. Over the past two years at LTM, I've worked on enterprise-scale healthcare software for a global medical technology client, covering requirement analysis, feature development, root-cause analysis, and release support, where reliability and quality are non-negotiable.",
  "Outside of work, I build with Python, FastAPI, Docker, and AWS, and apply machine learning to practical problems. My research on cricket performance analytics is published with Springer. I value clean architecture, clear communication, and software that keeps working long after it ships.",
];

/* -------------------------------------------------------------------------- */
/*  Deck configuration                                                         */
/* -------------------------------------------------------------------------- */

/** Resting pose of a card by its distance from the front of the deck. */
const STACK_POSES = [
  { y: 0, scale: 1, opacity: 1 },
  { y: 14, scale: 0.955, opacity: 0.75 },
  { y: 28, scale: 0.91, opacity: 0.4 },
  { y: 28, scale: 0.91, opacity: 0 },
] as const;

const SWIPE_DISTANCE = 90; // px
const SWIPE_VELOCITY = 500; // px/s
const FLY_DISTANCE = 280; // px
const MOVE_RESET_MS = 500;

const SPRING: Transition = { type: "spring", stiffness: 260, damping: 28 };

type Move = { kind: "next" | "prev"; id: string };

const tintColor = (tint: FactCard["tint"]) =>
  tint === "accent" ? modernColors.accent : modernColors.secondary;

/* -------------------------------------------------------------------------- */
/*  One card in the deck                                                       */
/* -------------------------------------------------------------------------- */

interface DeckCardProps {
  card: FactCard;
  offset: number; // 0 = front of the deck
  index: number;
  total: number;
  move: Move | null;
  reduced: boolean;
  canTilt: boolean;
  onSwipe: (dir: 1 | -1) => void;
}

const DeckCard: React.FC<DeckCardProps> = ({
  card,
  offset,
  index,
  total,
  move,
  reduced,
  canTilt,
  onSwipe,
}) => {
  const isActive = offset === 0;
  const tint = tintColor(card.tint);
  const Icon = card.icon;

  const x = useMotionValue(0);

  // Pointer-follow tilt lives on an inner wrapper so it never fights the drag.
  const tiltOn = isActive && canTilt && !reduced;
  const rotX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!tiltOn || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotY.set(px * 8);
    rotX.set(-py * 8);
  };

  const resetTilt = () => {
    rotX.set(0);
    rotY.set(0);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const { offset: o, velocity: v } = info;
    if (o.x < -SWIPE_DISTANCE || v.x < -SWIPE_VELOCITY) {
      onSwipe(1);
    } else if (o.x > SWIPE_DISTANCE || v.x > SWIPE_VELOCITY) {
      onSwipe(-1);
    } else {
      animate(x, 0, SPRING);
    }
  };

  // Poses and transitions
  const pose = STACK_POSES[Math.min(offset, STACK_POSES.length - 1)];
  const leaving = !reduced && move?.kind === "next" && move.id === card.id;
  const entering = !reduced && move?.kind === "prev" && move.id === card.id;

  const target = leaving
    ? {
        x: [null, -FLY_DISTANCE, 0],
        y: pose.y,
        scale: pose.scale,
        opacity: [null, 0, 0],
      }
    : entering
      ? {
          x: [-FLY_DISTANCE, 0],
          y: pose.y,
          scale: pose.scale,
          opacity: [0, 1],
        }
      : { x: 0, y: pose.y, scale: pose.scale, opacity: pose.opacity };

  const transition: Transition = reduced
    ? { duration: 0 }
    : leaving
      ? {
          default: SPRING,
          x: { duration: 0.45, times: [0, 0.55, 1], ease: "easeInOut" },
          opacity: { duration: 0.45, times: [0, 0.55, 1] },
        }
      : entering
        ? {
            default: SPRING,
            x: { duration: 0.4, ease: "easeOut" },
            opacity: { duration: 0.3 },
          }
        : SPRING;

  const zIndex = leaving || entering ? 50 : 30 - offset * 10;

  return (
    <motion.div
      className={`absolute inset-x-0 top-0 h-[300px] sm:h-[280px] select-none ${
        isActive ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
      }`}
      style={{ x, zIndex, touchAction: "pan-y" }}
      initial={false}
      animate={target}
      transition={transition}
      drag={isActive ? "x" : false}
      dragDirectionLock
      dragMomentum={false}
      dragElastic={0.6}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      aria-hidden={!isActive}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}: ${card.title}`}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-xl border"
        style={{
          rotateX: rotX,
          rotateY: rotY,
          transformPerspective: 900,
          borderColor: isActive ? `${tint}80` : `${tint}30`,
          background: `linear-gradient(160deg, ${modernColors.surface}, ${modernColors.background})`,
          boxShadow: isActive
            ? `0 18px 40px -18px rgba(0,0,0,0.8), 0 0 28px -6px ${tint}45`
            : "0 10px 24px -14px rgba(0,0,0,0.8)",
        }}
        whileHover={tiltOn ? { y: -4 } : undefined}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
      >
        {/* Identity: top rule and corner glow in the card's tint */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${tint}, transparent)`,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full blur-3xl"
          style={{ backgroundColor: `${tint}22` }}
        />

        <div className="relative flex h-full flex-col p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border"
              style={{
                color: tint,
                borderColor: `${tint}50`,
                backgroundColor: `${tint}14`,
              }}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3
              className="text-base font-semibold sm:text-lg"
              style={{ color: modernColors.text }}
            >
              {card.title}
            </h3>
          </div>

          <dl className="flex-1">
            {card.rows.map((row, i) => (
              <div
                key={row.label}
                className="py-2"
                style={{
                  borderTop:
                    i === 0 ? "none" : `1px solid ${modernColors.muted}33`,
                }}
              >
                <dt className="text-xs" style={{ color: modernColors.muted }}>
                  {row.label}
                </dt>
                <dd
                  className="text-sm font-medium leading-snug sm:text-base"
                  style={{ color: modernColors.text }}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Quick Facts container                                                      */
/* -------------------------------------------------------------------------- */

const QuickFactsDeck: React.FC = () => {
  const total = FACT_CARDS.length;
  const [active, setActive] = useState(0);
  const [move, setMove] = useState<Move | null>(null);
  const [canTilt, setCanTilt] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);
  const reduced = useReducedMotion() ?? false;

  // Pointer tilt only for devices with a precise hovering pointer.
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanTilt(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const go = useCallback(
    (dir: 1 | -1) => {
      const next = (active + dir + total) % total;
      setMove({
        kind: dir === 1 ? "next" : "prev",
        // Next: the old front card flies out. Prev: the new front card flies in.
        id: dir === 1 ? FACT_CARDS[active].id : FACT_CARDS[next].id,
      });
      setActive(next);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(
        () => setMove(null),
        MOVE_RESET_MS,
      );
    },
    [active, total],
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <Card
      className="overflow-hidden rounded-lg border-2 backdrop-blur-sm"
      style={{
        backgroundColor: `${modernColors.surface}80`,
        borderColor: modernColors.accent,
        boxShadow: `0 0 24px ${modernColors.accent}25`,
      }}
    >
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${modernColors.accent}, ${modernColors.secondary})`,
        }}
      />
      <CardContent className="p-4 sm:p-6">
        {/* Header */}
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3
              className="text-lg font-semibold sm:text-xl"
              style={{ color: modernColors.text }}
            >
              Quick Facts
            </h3>
            <p
              className="mt-0.5 text-xs sm:text-sm"
              style={{ color: modernColors.muted }}
            >
              {OPEN_TO}
            </p>
          </div>
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold sm:text-sm"
            style={{
              color: modernColors.success,
              borderColor: `${modernColors.success}60`,
              backgroundColor: `${modernColors.success}15`,
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 motion-reduce:animate-none"
                style={{ backgroundColor: modernColors.success }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: modernColors.success }}
              />
            </span>
            {AVAILABILITY_STATUS}
          </span>
        </div>

        {/* Deck. Fixed height, so navigating never shifts the layout. */}
        <div
          className="qf-deck relative h-[336px] rounded-xl sm:h-[316px]"
          role="region"
          aria-roledescription="carousel"
          aria-label="Quick facts"
          tabIndex={0}
          onKeyDown={onKeyDown}
          style={{ perspective: 1000 }}
        >
          {FACT_CARDS.map((card, i) => (
            <DeckCard
              key={card.id}
              card={card}
              index={i}
              total={total}
              offset={(i - active + total) % total}
              move={move}
              reduced={reduced}
              canTilt={canTilt}
              onSwipe={go}
            />
          ))}
        </div>

        {/* Screen reader announcement of the active card */}
        <p className="sr-only" aria-live="polite">
          {`Card ${active + 1} of ${total}: ${FACT_CARDS[active].title}`}
        </p>

        {/* Progress and controls */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p
              className="text-sm font-semibold tabular-nums"
              style={{ color: modernColors.text }}
            >
              {pad(active + 1)}
              <span style={{ color: modernColors.muted }}> / {pad(total)}</span>
            </p>
            <div className="mt-2 flex gap-1.5" aria-hidden="true">
              {FACT_CARDS.map((card, i) => (
                <span
                  key={card.id}
                  className="h-1 w-6 rounded-full transition-colors duration-300 motion-reduce:transition-none"
                  style={{
                    backgroundColor:
                      i === active
                        ? modernColors.accent
                        : `${modernColors.muted}40`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <p
              className="mr-2 hidden text-xs sm:block"
              style={{ color: modernColors.muted }}
            >
              Swipe, drag, or use ← →
            </p>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous card"
              className="qf-btn flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
              style={{
                color: modernColors.text,
                borderColor: `${modernColors.accent}60`,
                backgroundColor: `${modernColors.background}99`,
              }}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next card"
              className="qf-btn flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
              style={{
                color: modernColors.text,
                borderColor: `${modernColors.accent}60`,
                backgroundColor: `${modernColors.background}99`,
              }}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{ background: modernColors.background }}
    >
      <style>{`
        .qf-deck:focus-visible,
        .qf-btn:focus-visible {
          outline: 2px solid ${modernColors.accent};
          outline-offset: 3px;
        }
        .qf-btn:hover {
          border-color: ${modernColors.accent};
          background-color: ${modernColors.accent}1f;
        }
      `}</style>

      <div className="container relative z-10 mx-auto lg:ml-20 xl:ml-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2
            className="mb-4 text-4xl font-bold sm:mb-6 sm:text-5xl lg:text-6xl"
            style={{ color: modernColors.text }}
          >
            About{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${modernColors.secondary}, ${modernColors.accent})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </span>
          </h2>
          <div
            className="mx-auto mb-6 h-1 w-16 rounded-full sm:mb-8 sm:w-20 lg:w-24"
            style={{
              background: `linear-gradient(90deg, ${modernColors.secondary}, ${modernColors.accent})`,
            }}
          />
        </motion.div>

        <div className="mx-auto grid max-w-6xl items-start gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 space-y-4 sm:space-y-6 lg:order-1"
          >
            {ABOUT_PARAGRAPHS.map((text) => (
              <p
                key={text.slice(0, 24)}
                className="text-base leading-relaxed sm:text-lg"
                style={{ color: modernColors.text }}
              >
                {text}
              </p>
            ))}

            <div
              className="flex items-center space-x-4 pt-4"
              style={{ color: modernColors.text }}
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <span className="text-base sm:text-lg">
                Based in Bangalore, India
              </span>
            </div>
          </motion.div>

          {/* Right: single Quick Facts container with the card deck */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 min-w-0 lg:order-2"
          >
            <QuickFactsDeck />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
