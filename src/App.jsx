import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    id: "01",
    category: "ARITHMETIC ARCHITECTURE",
    title: "Optimized Dadda Multiplier",
    description:
      "An 8-bit multiplier architecture explored through Dadda reduction, 4:2 compressor-based optimization, and timing-oriented FPGA implementation.",
    tools: ["VERILOG", "VIVADO", "FPGA"],
    link: "https://github.com/piyushprajapati550/gate-level-4-2-compressors_8x8-Dadda-Multiplier",
    visual: "dadda",
  },
  {
    id: "02",
    category: "FPGA / FSM DESIGN",
    title: "Traffic Light Controller",
    description:
      "A four-way traffic controller designed in Verilog using finite-state machine logic, timing control, and FPGA-oriented RTL implementation.",
    tools: ["VERILOG", "FSM", "BASYS3"],
    link: "https://github.com/piyushprajapati550/FPGA_traffic-light-controller_verilog",
    visual: "fsm",
  },
  {
    id: "03",
    category: "MEMORY DESIGN",
    title: "6T SRAM Cell Design",
    description:
      "A transistor-level 6T SRAM design with simulation and analysis focused on fundamental hold, read, and write operations.",
    tools: ["CADENCE", "SRAM", "VLSI"],
    link: "https://github.com/piyushprajapati550/6TSRAM_Cadence",
    visual: "sram",
  },
];

const skills = [
  {
    number: "01",
    title: "RTL & HDL",
    code: "RTL_01",
    description:
      "Designing synthesizable digital systems with structured combinational and sequential logic.",
    items: [
      "VERILOG HDL",
      "RTL DESIGN",
      "FSM",
      "COUNTERS",
      "REGISTERS",
      "TESTBENCH",
    ],
  },
  {
    number: "02",
    title: "FPGA & EDA",
    code: "FPGA_02",
    description:
      "Working across the FPGA development flow from RTL through implementation and analysis.",
    items: [
      "XILINX VIVADO",
      "BASYS3",
      "SYNTHESIS",
      "IMPLEMENTATION",
      "TIMING ANALYSIS",
      "XDC",
    ],
  },
  {
    number: "03",
    title: "Digital Architecture",
    code: "ARCH_03",
    description:
      "Exploring arithmetic structures with attention to critical paths and implementation trade-offs.",
    items: [
      "DADDA TREE",
      "WALLACE TREE",
      "BOOTH",
      "4:2 COMPRESSOR",
      "KOGGE-STONE",
      "ADDERS",
    ],
  },
  {
    number: "04",
    title: "VLSI & Circuits",
    code: "VLSI_04",
    description:
      "Building familiarity with transistor-level circuits and fundamental memory architectures.",
    items: [
      "CADENCE",
      "CMOS",
      "6T SRAM",
      "CIRCUIT DESIGN",
      "SIMULATION",
      "VLSI",
    ],
  },
];

function Waveform() {
  return (
    <div className="waveform">
      <div className="wave-label">
        <span>SIGNAL_MONITOR</span>
        <span>100 MHz</span>
      </div>

      <svg
        viewBox="0 0 800 180"
        preserveAspectRatio="none"
        className="wave-svg"
      >
        <path
          className="wave-grid"
          d="M0 30 H800 M0 90 H800 M0 150 H800"
        />

        <path
          className="wave-clock"
          d="M0 130 L40 130 L40 40 L80 40 L80 130 L120 130 L120 40
          L160 40 L160 130 L200 130 L200 40 L240 40 L240 130
          L280 130 L280 40 L320 40 L320 130 L360 130 L360 40
          L400 40 L400 130 L440 130 L440 40 L480 40 L480 130
          L520 130 L520 40 L560 40 L560 130 L600 130 L600 40
          L640 40 L640 130 L680 130 L680 40 L720 40 L720 130 L800 130"
        />

        <path
          className="wave-data"
          d="M0 100
          C50 100 60 100 80 75
          C100 50 120 50 145 100
          C170 150 200 150 230 95
          C260 40 300 40 330 95
          C360 145 400 145 430 90
          C460 35 500 35 530 90
          C560 145 610 145 640 90
          C680 35 720 35 800 100"
        />
      </svg>

      <div className="wave-info">
        <span>CLK</span>
        <span>DATA</span>
        <span>STATE: ACTIVE</span>
      </div>
    </div>
  );
}

function CircuitBackground() {
  return (
    <div className="circuit-bg" aria-hidden="true">
      <div className="trace trace-one"></div>
      <div className="trace trace-two"></div>
      <div className="trace trace-three"></div>
      <div className="trace-node node-one"></div>
      <div className="trace-node node-two"></div>
      <div className="trace-node node-three"></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <CircuitBackground />

      {/* NAVBAR */}
      <header className="site-header">
        <nav className="navbar">
          <a href="#home" className="logo">
            PIYUSH<span>.</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#about">ABOUT</a>
            <a href="#projects">WORK</a>
            <a href="#skills">STACK</a>
            <a href="#journey">JOURNEY</a>
          </div>

          <a href="#contact" className="nav-contact">
            LET&apos;S TALK <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-grid">
            <div className="hero-main">
              <div className="hero-status">
                <span className="status-dot"></span>
                <span>OPEN TO ENGINEERING OPPORTUNITIES</span>
              </div>

              <p className="eyebrow hero-eyebrow">
                ECE STUDENT <span>/</span> RTL DESIGN <span>/</span> FPGA DEVELOPMENT
              </p>

              <h1>
                BUILDING
                <br />
                <span>DIGITAL</span>
                <br />
                SYSTEMS.
              </h1>

              <p className="hero-description">
                I&apos;m <strong>Piyush Kumar Prajapati</strong>, an Electronics
                and Communication Engineering student focused on RTL design,
                FPGA development, digital architecture, and VLSI systems.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  <span>VIEW SELECTED WORK</span>
                  <span className="button-arrow">↗</span>
                </a>

                <a href="#contact" className="button button-secondary">
                  GET IN TOUCH
                </a>
              </div>

              <div className="hero-metrics">
                <div>
                  <span>DOMAIN</span>
                  <strong>DIGITAL DESIGN</strong>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>RTL / FPGA</strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong className="active-text">BUILDING</strong>
                </div>
              </div>
            </div>

            <aside className="hero-panel">
              <div className="panel-top">
                <span>ENGINEERING PROFILE</span>
                <span>01 / 01</span>
              </div>

              <div className="chip-display">
                <div className="chip-corner corner-tl"></div>
                <div className="chip-corner corner-tr"></div>
                <div className="chip-corner corner-bl"></div>
                <div className="chip-corner corner-br"></div>

                <div className="chip-core">
                  <span className="chip-label">DESIGN_CORE</span>
                  <strong>PP</strong>
                  <small>RTL • FPGA • VLSI</small>
                </div>

                <div className="chip-pins pins-left">
                  <span></span><span></span><span></span><span></span>
                </div>

                <div className="chip-pins pins-right">
                  <span></span><span></span><span></span><span></span>
                </div>
              </div>

              <div className="panel-identity">
                <p>PIYUSH KUMAR PRAJAPATI</p>
                <div className="identity-line"></div>
                <span>RTL / FPGA / DIGITAL DESIGN</span>
              </div>

              <div className="focus-list">
                <div>
                  <span>01</span>
                  <p>RTL ARCHITECTURE</p>
                </div>

                <div>
                  <span>02</span>
                  <p>FPGA IMPLEMENTATION</p>
                </div>

                <div>
                  <span>03</span>
                  <p>DIGITAL ARITHMETIC</p>
                </div>

                <div>
                  <span>04</span>
                  <p>VLSI & MEMORY</p>
                </div>
              </div>

              <div className="panel-footer">
                <span>2026</span>
                <span>INDIA</span>
              </div>
            </aside>
          </div>

          <Waveform />

          <div className="scroll-indicator">
            <span className="scroll-line"></span>
            SCROLL TO EXPLORE
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="section-index">01</div>

          <div className="section-content">
            <div className="section-intro">
              <p className="eyebrow">ABOUT</p>

              <h2>
                FROM <span>LOGIC</span>
                <br />
                TO HARDWARE.
              </h2>
            </div>

            <div className="about-copy">
              <p className="lead-text">
                My work is centered around understanding how digital systems
                move from an architectural idea to synthesizable RTL and
                finally to hardware implementation.
              </p>

              <p>
                I am particularly interested in RTL design, FPGA workflows,
                digital arithmetic, and performance-oriented hardware
                architecture. I enjoy building systems, verifying functionality,
                and studying implementation trade-offs.
              </p>

              <div className="design-flow">
                <div>IDEA</div>
                <span>→</span>
                <div>RTL</div>
                <span>→</span>
                <div>SYNTHESIS</div>
                <span>→</span>
                <div>FPGA</div>
              </div>

              <div className="about-meta">
                <div>
                  <span>FOCUS</span>
                  <strong>RTL / FPGA / VLSI</strong>
                </div>

                <div>
                  <span>GRADUATION</span>
                  <strong>2027</strong>
                </div>

                <div>
                  <span>DISCIPLINE</span>
                  <strong>ECE</strong>
                </div>
              </div>

              <div className="about-links">
                <a
                  href="https://github.com/piyushprajapati550"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/piyush550"
                  target="_blank"
                  rel="noreferrer"
                >
                  LINKEDIN ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="section-index">02</div>

          <div className="projects-header">
            <div>
              <p className="eyebrow">SELECTED WORK</p>

              <h2>
                BUILT TO
                <br />
                <span>EXPLORE.</span>
              </h2>
            </div>

            <p>
              A selection of projects across digital arithmetic, FPGA-based RTL
              systems, and transistor-level memory design.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article
                className={`project-row project-${project.visual}`}
                key={project.id}
              >
                <div className="project-id">{project.id}</div>

                <div className="project-main">
                  <p className="project-category">{project.category}</p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tools">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>

                <div className="project-visual" aria-hidden="true">
                  {project.visual === "dadda" && (
                    <div className="mini-dadda">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  )}

                  {project.visual === "fsm" && (
                    <div className="mini-fsm">
                      <span>G</span>
                      <span>Y</span>
                      <span>R</span>
                      <i></i>
                    </div>
                  )}

                  {project.visual === "sram" && (
                    <div className="mini-sram">
                      <span>Q</span>
                      <span>Q̅</span>
                    </div>
                  )}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-arrow"
                  aria-label={`Open ${project.title}`}
                >
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="section-index">03</div>

          <div className="skills-header">
            <div>
              <p className="eyebrow">ENGINEERING STACK</p>

              <h2>
                TOOLS &
                <br />
                <span>FOUNDATIONS.</span>
              </h2>
            </div>

            <p>
              Technologies and engineering concepts currently used across my
              digital design and hardware development workflow.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.number}>
                <div className="skill-card-top">
                  <span>{skill.number}</span>
                  <span>{skill.code}</span>
                </div>

                <div className="skill-status">
                  <span></span>
                  ACTIVE MODULE
                </div>

                <h3>{skill.title}</h3>

                <p>{skill.description}</p>

                <div className="skill-items">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CURRENT FOCUS */}
        <section className="section focus-section">
          <div className="section-index">04</div>

          <div className="focus-header">
            <p className="eyebrow">CURRENT FOCUS</p>

            <h2>
              WHAT I&apos;M
              <br />
              <span>EXPLORING.</span>
            </h2>
          </div>

          <div className="focus-grid">
            <div className="focus-item">
              <span>01</span>
              <h3>Digital Arithmetic</h3>
              <p>
                Exploring multiplier reduction trees, compressor architectures,
                and efficient final-stage addition.
              </p>
            </div>

            <div className="focus-item">
              <span>02</span>
              <h3>RTL Microarchitecture</h3>
              <p>
                Improving the transition from high-level architecture concepts
                into structured and synthesizable RTL.
              </p>
            </div>

            <div className="focus-item">
              <span>03</span>
              <h3>FPGA Implementation</h3>
              <p>
                Studying synthesis, implementation reports, critical paths,
                resource utilization, and timing behavior.
              </p>
            </div>

            <div className="focus-item">
              <span>04</span>
              <h3>VLSI Design</h3>
              <p>
                Building deeper familiarity with CMOS circuits, memory cells,
                and digital IC design fundamentals.
              </p>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="section journey-section">
          <div className="section-index">05</div>

          <div className="journey-header">
            <p className="eyebrow">ENGINEERING JOURNEY</p>

            <h2>
              LEARNING BY
              <br />
              <span>BUILDING.</span>
            </h2>
          </div>

          <div className="journey-flow-label">
            <span>LOGIC</span>
            <i></i>
            <span>RTL</span>
            <i></i>
            <span>SYNTHESIS</span>
            <i></i>
            <span>IMPLEMENTATION</span>
            <i></i>
            <span>OPTIMIZATION</span>
          </div>

          <div className="journey-list">
            <article className="journey-item">
              <div className="journey-year">FOUNDATION</div>
              <div>
                <h3>Digital Design Fundamentals</h3>
                <p>
                  Built a foundation in combinational logic, sequential logic,
                  finite-state machines, counters, registers, and arithmetic
                  circuits.
                </p>
              </div>
            </article>

            <article className="journey-item">
              <div className="journey-year">RTL</div>
              <div>
                <h3>Verilog & Hardware Description</h3>
                <p>
                  Developed synthesizable Verilog modules and testbenches while
                  exploring structured RTL design and verification workflows.
                </p>
              </div>
            </article>

            <article className="journey-item">
              <div className="journey-year">FPGA</div>
              <div>
                <h3>Implementation & Analysis</h3>
                <p>
                  Used Vivado-based workflows to synthesize, implement, and
                  analyze digital designs on FPGA-oriented hardware platforms.
                </p>
              </div>
            </article>

            <article className="journey-item">
              <div className="journey-year">NOW</div>
              <div>
                <h3>Architecture & Optimization</h3>
                <p>
                  Currently focusing on arithmetic architectures, performance
                  trade-offs, RTL microarchitecture, FPGA implementation, and
                  VLSI design concepts.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="contact-grid-decoration"></div>

          <div className="contact-inner">
            <p className="eyebrow">06 / GET IN TOUCH</p>

            <h2>
              LET&apos;S BUILD
              <br />
              <span>SOMETHING.</span>
            </h2>

            <p className="contact-copy">
              Open to opportunities, collaborations, and conversations around
              RTL design, FPGA development, digital IC design, and VLSI.
            </p>

            <a
              href="mailto:piyushprajapati550@gmail.com"
              className="contact-email"
            >
              <span>piyushprajapati550@gmail.com</span>
              <b>↗</b>
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/piyushprajapati550"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB ↗
              </a>

              <a
                href="https://www.linkedin.com/in/piyush550"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 PIYUSH KUMAR PRAJAPATI</p>
        <p>RTL · FPGA · DIGITAL SYSTEMS</p>
      </footer>
    </div>
  );
}

export default App;