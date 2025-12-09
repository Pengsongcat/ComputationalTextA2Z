let data = {
  "start": [
    "<div class='visa-title'>XENO VISITOR VISA</div>" +
    "Name: #name#<br>" +
    "Age: #age#<br>" +
    "Pronoun: #pron#<br>" +
    "Embodied Mode [Legacy Gender]: #embodied_mode#<br>" +
    "Reproduction Pattern: #repro_pattern#<br>" +
    "Body Form: #body_form#<br>" +
    "Mental Form: #mental_form#<br>" +
    "Relational Configuration: #relational_config#<br>"
  ],

    "glitch": [
    "#gl_seq#",            
    "#gl_seq##gl_seq#",   
    "#gl_seq##gl_seq#.#gl_seq#",
    ],

    "gl_seq": [
    "#gl_char##gl_char##gl_char#",
    "#gl_char##gl_char#",
    "#gl_char#"
    ],

    "gl_char": [
    "X","Z","Q","Æ","Ø","Ψ","Λ","Ƶ","Җ","Ф",
    "x","z","q","v","k","*","@","%","$","£"
    ],

    "pi":["3.14159265359...", "3.14159265358979...", "3.14159265358979323846...", "3.14159"],
    "number": ["#int#", "#int##int#"],
    "number_decimal": ["#int#.#int#"],
    "int": ["#digit_nonzero#"],
    "digit_nonzero": ["1","2","3","4","5","6","7","8","9"],
    "d": ["0","1","2","3","4","5","6","7","8","9"],


  // -------------------------
  // Name
  // -------------------------
  "name": [
    "Fira", "Lomi", "Vyre", "Ossa", "Tata", "Milo", "Ryn", "Uli", "Zeph", "Mira"
  ],

    // -------------------------
    // Age (Readable but varied)
    // -------------------------
    "age": [
    "#age_number#",
    "#age_cycle#",
    "#age_undefined#"
    ],

    "age_number": [
    "#int#",
    "#pi#",
    "#number#", "#number#.#number#", "#number##number#","#number##number##number#",
    "#number_decimal#", "#number_decimal#",
    ],

    "age_cycle": [
    "#int# #phase_plural#",
    "#phase_single# Phase",
    "#number# #phase_plural#",
    "#number# #event_plural#"
    ],

    "phase_single": [
    "Germination",
    "Solidification",
    "Reassembly",
    "Bloom",
    "Condensation"
    ],

    "phase_plural": [
    "growth cycles",
    "Germination Cycles",
    "Solidification Cycles",
    "Reassembly Periods",
    "Bloom Cycles",
    "Reform cycles",
    "Condensation Phases"
    ],

    "event_plural": [
    "Recoveries",
    "Fragmentations",
    "Shifts"
    ],

    "age_undefined": [
    "Undefined",
    "Phase shifting",
    "Age pending reconstruction",
    "Not fixed",
    "Variable",
    "#glitch##glitch##glitch#", "#glitch##glitch#"
    ],

  // -------------------------
  // Pronouns (Subject / Object, same base)
  // -------------------------
  "pron": [
    "#[base:#syll#]alien_pron#"
  ],

  "syll": [
    "#consonant##vowel#"
  ],

  "alien_pron": [
    "#subject# / #object#"
  ],

  "subject": [
    "#base#", "#base##vowel#"
  ],

  "object": [
    "#base##object_suffix#", "#base##object_suffix2#", "#base#-#object_suffix2#",  
  ],

  "object_suffix": [
    "n", "m", "s", "th", "sh", "v", "r", "x"
  ],

  "object_suffix2": [
    "en", "em", "es", "eth", "esh", "ev", "er", "ix"
  ],

  "consonant": [
    "x", "z", "q", "v", "k", "w", "y", "p", "s", "f", "h", "g",
    "kr", "m", "n", "b", "th", "sh", "zh", "l", "r"
  ],

  "vowel": [
    "a", "e", "i", "o", "u", "ae", "oe", "ie", "ue"
  ],

// -------------------------
// Embodied Mode (Short Words)
// -------------------------
"embodied_mode": [
  "#embodied_mode_stable#",
  "#embodied_mode_fluid#",
  "#embodied_mode_diffuse#"
],

"embodied_mode_stable": [
  "#stable_word.capitalize#"
],

"embodied_mode_fluid": [
  "#fluid_word.capitalize#"
],

"embodied_mode_diffuse": [
  "#diffuse_word.capitalize#"
],

// Stable: structured, fixed, clear boundaries
"stable_word": [
  "stone", "core", "pillar", "frame", "anchor", "root", "ridge", "spine"
],

// Fluid: moving, rhythmic, directional, changing
"fluid_word": [
  "flow", "tide", "wave", "pulse", "current", "stream", "ripple", "drift"
],

"diffuse_word": [
  "fog", "haze", "split", "smoke", "fractal", "shard", "splinter", "rift", "scatter", "shatter", "echo", "dust",
],


// -------------------------------------------------------
// Reproduction Pattern (chooses one of four descriptions)
// -------------------------------------------------------

"repro_pattern": [
  "#description_natural#",
  "#description_emotional#",
  "#description_interaction#",
  "#description_random#"
],

"description_natural": [
  "Every #int# lunar cycles, the individual undergoes #repro_method#, triggered by #trigger_natural#.",
  "At intervals of #int#–#int# light-phase shifts, the organism performs #repro_method#.",
  "Once every #int# shadow-length reversals, a secondary form detaches through #repro_method#.",
  "During the #int#th seasonal convergence, reproductive activity activates as #repro_method#.",
  "When atmospheric rhythm stabilizes for #int# consecutive units, the body initiates #repro_method#.",
  "After #int# celestial recalibration rounds, new forms emerge via #repro_method#.",
  "Every #int# humidity cycles, structural softening occurs, followed by #repro_method#.",
  "Reproduction manifests during the #int#th brightness threshold, expressed as #repro_method#.",
  "At each #int#-phase environmental oscillation, the organism generates new bodies through #repro_method#.",
  "During #int# harmonic shifts within the natural cycle, the organism performs #repro_method#.",
  "When the astral index reaches level #int#, reproductive output occurs through #repro_method#.",
  "Every #int# intervals of ambient cooling, a minor unit separates via #repro_method#.",
  "Upon completing #int# terrestrial drift cycles, the individual produces new forms through #repro_method#."
],

"description_emotional": [
  "Strong emotional resonance triggers sudden #repro_method#, often without warning.",
  "New forms surface when affective pressure rises, initiating #repro_method#.",
  "During high-intensity mood shifts, the organism emits secondary bodies via #repro_method#.",
  "Spikes in emotional amplitude are known to induce #repro_method#.",
  "When the individual experiences amplified internal echoes, reproduction occurs through #repro_method#.",
  "Documented reactions show that deep interpersonal resonance can provoke #repro_method#.",
  "The organism occasionally generates new microforms during emotional overflow, expressed as #repro_method#.",
  "Affective storms frequently culminate in spontaneous #repro_method#.",
  "When internal states destabilize, the resulting output manifests as #repro_method#."
],

"description_interaction": [
  "Close contact with another entity induces #repro_method#, often through #trigger_interaction#.",
  "Reproduction occurs when proximity resonance is achieved, generating new bodies via #repro_method#.",
  "Sustained attention from others triggers a soft release event expressed as #repro_method#.",
  "Interaction-phase ignition causes structural shedding that reorganizes through #repro_method#.",
  "During high interpersonal alignment, fragments detach and reform via #repro_method#.",
  "New forms emerge when external presence overlaps with the organism’s field, resulting in #repro_method#.",
  "Unexpected reproduction has been observed when gaze pressure exceeds threshold, producing #repro_method#.",
  "Shared spatial vibration between two entities leads to #repro_method#.",
  "Social proximity alters the body state, causing reproduction through #repro_method#."
],

"description_random": [
  "Reproduction occurs unpredictably, with #trigger_random# giving rise to #repro_method#.",
  "New bodies appear during system glitches, forming through #repro_method#.",
  "Spontaneous distortions in structure lead to unplanned #repro_method#.",
  "Secondary units sometimes manifest mid-motion through #repro_method#.",
  "During moments of temporal noise, the organism performs #repro_method#.",
  "Irregular internal ruptures trigger #repro_method#, cause unknown.",
  "Glitch-based activation frequently produces unregistered #repro_method# events.",
  "When informational drift occurs, reproduction surfaces as #repro_method#.",
  "Chaos-induced shifts result in unpredictable #repro_method# formation."
],

"trigger_natural": [
  "natural-cycle activation",
  "lunar-aligned trigger",
  "fixed-interval emergence",
  "seasonal-phase release"
],

"trigger_emotional": [
  "emotional-surge trigger",
  "resonance-based activation",
  "affect-driven emergence",
  "moodwave ignition"
],

"trigger_interaction": [
  "close-contact trigger",
  "attention-induced activation",
  "proximity resonance",
  "interaction-phase ignition"
],

"trigger_random": [
  "random spontaneous trigger",
  "unpatterned emergence",
  "glitch-based activation",
  "unpredictable micro-event"
],

// Reproduction Methods (random pool)
"repro_method": [
  "archive-division",
  "lineage-copy protocol",
  "patterned imprinting",
  "record-based replication",
  "ripple-division",
  "pulse-split formation",
  "tide-spread duplication",
  "waveborne imprint",
  "shard dispersal",
  "static-fragment fusion",
  "mirage recomposition",
  "scatter-grown formation"
],


  // -------------------------
  // Body Form
  // -------------------------
"body_form": [
  "#soft_float_form#",
  "#dense_solid_form#",
  "#flat_compressed_form#",
  "#twist_shifting_form#",
  "#fragment_segment_form#"
],


// Soft-Float（soft · light）

"soft_float_form": [
  "#soft_mat.capitalize# #soft_shape#",
  "#soft_shape.capitalize#, #soft_motion#",
  "#soft_mat.capitalize# form, #soft_motion#",
  "Shows a #soft_mat# quality, #soft_motion#"
],

"soft_mat": [
  "soft and semi-gel",
  "light fluid-like texture",
  "loosely bounded surface",
  "gentle and low-density form",
  "soft and faintly luminous body"
],

"soft_shape": [
  "with a faint floating outline",
  "showing an upward drifting contour",
  "appearing slightly inflated",
  "with a soft and unfixed shape",
  "gently trembling along the edges"
],

"soft_motion": [
  "moving lightly",
  "responding to airflow with small drifts",
  "remaining in slow suspension",
  "moving as if subtly lifted",
  "drifting when in motion"
],


// Dense-Solid（dense · heavy）

"dense_solid_form": [
  "#dense_mat.capitalize# #dense_shape#",
  "#dense_shape.capitalize#, #dense_motion#",
  "Displays a #dense_mat# structure, #dense_motion#"
],

"dense_mat": [
  "dense and heavy material",
  "a firm mineral-like surface",
  "a compact and solid structure",
  "a thick outer shell",
  "a highly pressurized internal form"
],

"dense_shape": [
  "with a stable and unmoving outline",
  "shaped like a compact block",
  "presenting a grounded and steady posture",
  "showing a firmly layered exterior",
  "with weight gathered at the lower body"
],

"dense_motion": [
  "moving slowly but steadily",
  "shifting with noticeable weight",
  "remaining unaffected by disturbance",
  "walking with heavy and even steps",
  "requiring time to change direction"
],


// Flat-Compressed（flat · compressed）

"flat_compressed_form": [
  "#flat_mat.capitalize# #flat_shape#",
  "#flat_shape.capitalize#, #flat_motion#",
  "Appears in a #flat_mat# state, #flat_motion#"
],

"flat_mat": [
  "thin and compressed surface texture",
  "a light mist-like layer",
  "a near two-dimensional profile",
  "a narrow and flattened exterior",
  "a shadow-like thinness"
],

"flat_shape": [
  "with a body pressed into a flat plane",
  "maintaining a very low spatial height",
  "extending across surfaces",
  "with a smoothed and spread-out outline",
  "appearing as a surface-level contour"
],

"flat_motion": [
  "gliding silently across the ground",
  "moving with planar slides",
  "traveling with almost no height change",
  "passing like a shifting shadow",
  "conforming closely to the terrain"
],


//Twist-Shifting（twisting · shifting）

"twist_shifting_form": [
  "#twist_mat.capitalize# #twist_shape#",
  "#twist_shape.capitalize#, #twist_motion#",
  "Shows a #twist_mat# frame, #twist_motion#"
],

"twist_mat": [
  "a spiraled outer texture",
  "a flexible and bending surface",
  "a curved and shifting structure",
  "a shell that moves with internal curves",
  "a frame that holds continuous twisting tension"
],

"twist_shape": [
  "with a spiral-shaped outline",
  "appearing slightly rotated at rest",
  "showing shapes that bend and re-bend",
  "arranged like a gentle twist",
  "with a body that seems lightly wound"
],

"twist_motion": [
  "twisting slightly under pressure",
  "adjusting direction through curvature",
  "moving in soft rotational arcs",
  "resetting its internal axis while walking",
  "turning in curved trajectories"
],


// Fragment-Segment（fragmented · modular）
"fragment_segment_form": [
  "#frag_mat.capitalize# #frag_shape#",
  "#frag_shape.capitalize#, #frag_motion#",
  "Appears as a #frag_mat# structure, #frag_motion#"
],

"frag_mat": [
  "made of multiple separate units",
  "a loosely connected modular body",
  "a structure formed from assembled pieces",
  "a compositional cluster of segments",
  "a body capable of coming apart"
],

"frag_shape": [
  "with a segmented arrangement",
  "formed from several joined parts",
  "showing gaps within its outline",
  "appearing as a moving assemblage",
  "with contours that are not continuous"
],

"frag_motion": [
  "rearranging itself when needed",
  "separating and rejoining during movement",
  "moving with multi-point coordination",
  "shifting its parts under pressure",
  "flowing like a group of pieces acting together"
],

// -------------------------------------------------------
// Mental Form 
// -------------------------------------------------------

"mental_form": [
  "#mf_stream#",
  "#mf_resonant#",
  "#mf_weave#",
  "#mf_flare#",
  "#mf_inward#",
  "#mf_scatter#"
],

// onvergent Stream
"mf_stream": [
  "#mf_stream_texture.capitalize#, #mf_stream_behavior#",
  "Mind shows #mf_stream_texture#, #mf_stream_behavior#",
  "Processing follows #mf_stream_texture#, #mf_stream_behavior#"
],

"mf_stream_texture": [
  "thought activity organized into a single dominant path",
  "inputs reduced to a narrow processing channel",
  "cognitive flow aligned to one stable direction",
  "internal signals arranged along a linear route",
  "processing compressed into a single pathway"
],

"mf_stream_behavior": [
  "peripheral noise minimized",
  "responses follow predictable one-way patterns",
  "signal alignment remains stable during evaluation",
  "decision routes stay direct and unbranched",
  "processing prioritizes directional consistency"
],


// Resonant Veil
"mf_resonant": [
  "#mf_res_texture.capitalize#, #mf_res_behavior#",
  "Mind presents #mf_res_texture#, #mf_res_behavior#",
  "Processing involves #mf_res_texture#, #mf_res_behavior#"
],

"mf_res_texture": [
  "signals passing through multiple internal layers",
  "perception distributed in thin overlapping strata",
  "thought activity arranged in soft echo-like tiers",
  "inputs moving across mist-like internal zones",
  "internal processing layered in gradual diffusion"
],

"mf_res_behavior": [
  "reactions delayed by internal echo cycles",
  "signals expanding before consolidation",
  "information looping before resolution",
  "responses spreading across layered channels",
  "processing slowed by multi-layer reflection"
],


// Relational Weave
"mf_weave": [
  "#mf_weave_texture.capitalize#, #mf_weave_behavior#",
  "Mind displays #mf_weave_texture#, #mf_weave_behavior#",
  "Processing shaped by #mf_weave_texture#, #mf_weave_behavior#"
],

"mf_weave_texture": [
  "cognitive threads extended toward surrounding cues",
  "internal nodes linked through flexible filaments",
  "processing arranged as a shifting web structure",
  "thought pathways branching into multiple contact points",
  "signal routes distributed across a soft mesh"
],

"mf_weave_behavior": [
  "patterns realign in response to nearby activity",
  "processing depends on proximity-based adjustments",
  "signal flow reorganizes with environmental rhythms",
  "decision-making influenced by external alignment",
  "internal routes rewoven during interaction"
],


// Impulse Flare
"mf_flare": [
  "#mf_flare_texture.capitalize#, #mf_flare_behavior#",
  "Mind exhibits #mf_flare_texture#, #mf_flare_behavior#",
  "Processing characterized by #mf_flare_texture#, #mf_flare_behavior#"
],

"mf_flare_texture": [
  "mental energy stored in short concentrated peaks",
  "thought signals gathered into ignition clusters",
  "processing nodes forming compact charge points",
  "internal patterns accumulating sudden output potential",
  "signal buildup forming rapid-fire bursts"
],

"mf_flare_behavior": [
  "decisions appear abruptly without gradual buildup",
  "response states activate in sudden clarity shifts",
  "processing jumps rapidly from idle to directed output",
  "signal peaks release in short bursts",
  "actions initiated through fast ignition events"
],


// inward Spiral
"mf_inward": [
  "#mf_in_texture.capitalize#, #mf_in_behavior#",
  "Mind shows #mf_in_texture#, #mf_in_behavior#",
  "Processing formed by #mf_in_texture#, #mf_in_behavior#"
],

"mf_in_texture": [
  "signals descending through multiple inward layers",
  "thought patterns folding into deeper internal zones",
  "processing routes turning through concentric loops",
  "awareness moving into low-noise inner chambers",
  "cognitive activity spiraling downward"
],

"mf_in_behavior": [
  "responses formed after extended internal recursion",
  "signals returning from deep-cycle processing",
  "outputs delayed by inward filtering",
  "information looping before final emergence",
  "processing prioritizing depth over speed"
],


// Scatter Shift
"mf_scatter": [
  "#mf_s_texture.capitalize#, #mf_s_behavior#",
  "Mind presents #mf_s_texture#, #mf_s_behavior#",
  "Processing defined by #mf_s_texture#, #mf_s_behavior#"
],

"mf_s_texture": [
  "awareness dispersed across several active nodes",
  "signals lighting up in multiple scattered points",
  "cognitive activity distributed across irregular positions",
  "thought routes forming discrete fragmented clusters",
  "processing activated in multi-point arrays"
],

"mf_s_behavior": [
  "ideas jump across distant internal nodes",
  "processing switches routes through irregular leaps",
  "multiple concepts handled in parallel states",
  "signal focus migrates between separate points",
  "outputs follow non-linear, scattered transitions"
],


// -------------------------------------------------------
// Relational Configuration
// -------------------------------------------------------

"relational_config": [
  "#rc_self_aligned#",
  "#rc_shadow_pair#",
  "#rc_resonance#",
  "#rc_drifting#",
  "#rc_transient#",
  "#rc_non_aligned#"
],

"rc_self_aligned": [
  "Functions primarily through self-alignment",
  "Maintains a stable internal companionship loop",
  "Relies on inward balance for ongoing support",
  "Operates as a single-form arrangement",
  "Sustains itself without external anchoring"
],

"rc_shadow_pair": [
  "Maintains a steady one-to-one pairing",
  "Linked consistently with a familiar counterpart",
  "Forms a long-term reflective partnership",
  "Keeps close alignment with a single known presence",
  "Engages in a stable mutual-mirroring relationship"
],

"rc_resonance": [
  "Maintains long-term mutual attunement with one entity",
  "Holds a stable, ongoing two-way support pattern",
  "Sustains a deep shared rhythm with a specific presence",
  "Keeps a consistent companion in close coordination",
  "Operates within a long-duration paired attunement"
],

"rc_drifting": [
  "Moves among multiple light connections",
  "Maintains a loose network of shifting contacts",
  "Keeps several soft, fluid points of interaction",
  "Navigates freely across multiple ongoing links",
  "Engages in open, multi-directional companionship"
],

"rc_transient": [
  "Connections tend to form in brief passing moments",
  "Interaction often appears and fades naturally",
  "Relations emerge at short intersections of contact",
  "Alignment dissolves soon after the point of meeting",
  "Patterns of closeness follow no fixed duration"
],

"rc_non_aligned": [
  "Shows low inclination toward external linkage",
  "Operates steadily in single-form mode",
  "Responds minimally to outward connection cues",
  "External linking remains in a prolonged idle state",
  "Primarily completes cycles through internal regulation"
]

}