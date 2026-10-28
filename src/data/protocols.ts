/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EmergencyProtocol, VitalSign, QuizQuestion } from '../types';

export const EMERGENCY_PROTOCOLS: EmergencyProtocol[] = [
  {
    id: 'cpr',
    title: 'Adult Cardiac Arrest & CPR',
    category: 'cardiac',
    urgencyLevel: 'immediate',
    estimatedTime: 'Continuous (until AED or EMS arrival)',
    summary: 'Rapid chest compressions at 100–120 BPM, 2 to 2.4 inches (5–6 cm) deep in the center of the chest.',
    immediateAction: 'Verify unresponsiveness, shout for an AED, call 911 immediately, begin continuous chest compressions.',
    contraindications: [
      'Do not perform CPR if the individual is breathing normally, moving, or responsive.',
      'Do not interrupt compressions for more than 10 seconds during AED analysis.'
    ],
    callDispatcherPrompt: 'Tell 911: "Adult unresponsive and not breathing at [Location]. CPR in progress."',
    steps: [
      {
        stepNumber: 1,
        actionVerb: 'Assess',
        instruction: 'Tap the person’s shoulders firmly and shout loudly: "Are you okay?" Look at the chest for normal breathing (5–10 seconds max).',
        clinicalNote: 'Agonal gasps (irregular snorting sounds) are not normal breathing and indicate cardiac arrest.',
        isUrgent: true
      },
      {
        stepNumber: 2,
        actionVerb: 'Dispatch',
        instruction: 'Point directly to a specific bystander: "Call 911 right now and bring the nearest automated external defibrillator (AED)!"',
        clinicalNote: 'Putting the phone on speaker keeps hands free to begin chest compressions immediately.',
        isUrgent: true
      },
      {
        stepNumber: 3,
        actionVerb: 'Position',
        instruction: 'Place the heel of one hand on the center of the chest (lower half of breastbone). Interlock fingers with the second hand, keep elbows straight and shoulders directly over hands.',
        clinicalNote: 'Proper vertical alignment prevents shoulder and wrist fatigue during high-rate compressions.',
        isUrgent: false
      },
      {
        stepNumber: 4,
        actionVerb: 'Compress',
        instruction: 'Push hard and fast: 2 to 2.4 inches (5–6 cm) deep at a cadence of 100 to 120 beats per minute. Allow complete chest recoil between each push.',
        clinicalNote: 'Full recoil permits coronary perfusion between compression strokes.',
        isUrgent: true
      },
      {
        stepNumber: 5,
        actionVerb: 'Defibrillate',
        instruction: 'As soon as the AED arrives, turn it on immediately and follow the automated voice prompts. Continue compressions while pads are applied.',
        clinicalNote: 'Every 60-second delay in defibrillation reduces survival odds by 7–10%.',
        isUrgent: false
      }
    ]
  },
  {
    id: 'stroke',
    title: 'Acute Stroke Response (FAST)',
    category: 'stroke',
    urgencyLevel: 'immediate',
    estimatedTime: 'Within golden window (under 3 hours)',
    summary: 'Clinical triage using the FAST method: Face asymmetry, Arm drift, Speech slurring, and immediate Time of onset recording.',
    immediateAction: 'Identify focal neurological deficits, record exact time symptom started, call 911. Keep patient flat and calm.',
    contraindications: [
      'Do not give aspirin, food, or water (risk of aspiration if swallowing is impaired).',
      'Do not wait to see if symptoms resolve; transient ischemic attacks (TIAs) carry extreme stroke recurrence risk.'
    ],
    callDispatcherPrompt: 'Tell 911: "Suspected acute stroke with sudden neurological deficit. Last known well time: [Time]."',
    steps: [
      {
        stepNumber: 1,
        actionVerb: 'Face',
        instruction: 'Ask the person to smile broadly or show their teeth. Check for asymmetrical facial droop or uneven lip corners.',
        clinicalNote: 'Unilateral facial paralysis indicates contralateral cerebral ischemia.',
        isUrgent: true
      },
      {
        stepNumber: 2,
        actionVerb: 'Arms',
        instruction: 'Ask the person to raise both arms straight out in front of them with palms up and eyes closed for 10 seconds. Watch for downward drift.',
        clinicalNote: 'Pronator drift is a sensitive indicator of upper motor neuron compromise.',
        isUrgent: true
      },
      {
        stepNumber: 3,
        actionVerb: 'Speech',
        instruction: 'Ask the person to repeat a simple sentence: "The sky is blue in Boston." Listen for slurred pronunciation, garbled syntax, or inability to speak.',
        clinicalNote: 'Dysarthria or expressive aphasia points to acute cortical disruption.',
        isUrgent: true
      },
      {
        stepNumber: 4,
        actionVerb: 'Time',
        instruction: 'Note the exact time symptoms were first observed. Call 911 immediately and inform them of a suspected stroke alert.',
        clinicalNote: 'Intravenous thrombolysis (tPA) has strict therapeutic time constraints (< 4.5 hours from onset).',
        isUrgent: true
      }
    ]
  },
  {
    id: 'choking',
    title: 'Foreign Body Airway Obstruction',
    category: 'respiratory',
    urgencyLevel: 'immediate',
    estimatedTime: 'Immediate critical response',
    summary: 'Universal choking distress relief: alternate 5 sharp back blows with 5 upward abdominal thrusts (Heimlich maneuver).',
    immediateAction: 'Determine if obstruction is mild (coughing) or severe (silent, clutching neck, cyanosis). For severe: initiate thrusts.',
    contraindications: [
      'Do not perform abdominal thrusts if the person is coughing forcefully or speaking normally.',
      'For pregnant individuals or infants, substitute chest thrusts over the mid-breastbone.'
    ],
    callDispatcherPrompt: 'Tell 911: "Adult with complete airway obstruction. Initiating back blows and abdominal thrusts."',
    steps: [
      {
        stepNumber: 1,
        actionVerb: 'Verify',
        instruction: 'Ask: "Are you choking?" If they cannot speak, breathe, or cough, and are clutching their throat (universal sign), take immediate action.',
        clinicalNote: 'If the person can cough forcefully, encourage continuous coughing; do not intervene with thrusts yet.',
        isUrgent: true
      },
      {
        stepNumber: 2,
        actionVerb: 'Position',
        instruction: 'Stand behind the individual with one foot slightly in front of the other for balance. Lean the person forward at the waist.',
        clinicalNote: 'Leaning forward harnesses gravity to project the obstructing object outward rather than deeper into the trachea.',
        isUrgent: false
      },
      {
        stepNumber: 3,
        actionVerb: 'Blows',
        instruction: 'Deliver 5 separate, forceful back blows between the shoulder blades using the heel of your hand.',
        clinicalNote: 'Sharp back blows create concussive thoracic vibrations to dislodge the foreign body.',
        isUrgent: true
      },
      {
        stepNumber: 4,
        actionVerb: 'Thrusts',
        instruction: 'Wrap arms around their waist. Make a fist with thumb side against their abdomen, just above navel. Grasp fist with other hand and thrust inward and upward.',
        clinicalNote: 'Deliver 5 quick, upward thrusts to elevate the diaphragm and force air up through the trachea.',
        isUrgent: true
      },
      {
        stepNumber: 5,
        actionVerb: 'Transition',
        instruction: 'If the person becomes unresponsive, lower them safely to the floor, call 911 immediately, and begin CPR compressions.',
        clinicalNote: 'Inspect the oral cavity before rescue breaths; only sweep if foreign object is clearly visible and reachable.',
        isUrgent: true
      }
    ]
  },
  {
    id: 'bleeding',
    title: 'Severe Bleeding & Hemorrhage Control',
    category: 'trauma',
    urgencyLevel: 'immediate',
    estimatedTime: 'Stop bleeding within 2–3 minutes',
    summary: 'Aggressive hemorrhage intervention: direct firm pressure, wound packing for junctional areas, and commercial tourniquet placement for limbs.',
    immediateAction: 'Apply direct manual pressure with gauze or cloth, elevate, and apply tourniquet 2–3 inches above wound if arterial spurting.',
    contraindications: [
      'Never place a tourniquet directly over a joint (knee or elbow); place 2–3 inches proximal toward the heart.',
      'Never loosen or remove a tourniquet once secured; only trained surgical staff should release it.'
    ],
    callDispatcherPrompt: 'Tell 911: "Severe arterial limb hemorrhage at [Location]. Tourniquet applied at [Exact Time]."',
    steps: [
      {
        stepNumber: 1,
        actionVerb: 'Expose',
        instruction: 'Cut or remove clothing over the wound to identify the exact source of continuous or spurting bleeding.',
        clinicalNote: 'Arterial blood is bright crimson and spurts synchronously with ventricular systole.',
        isUrgent: true
      },
      {
        stepNumber: 2,
        actionVerb: 'Compress',
        instruction: 'Place sterile gauze (or clean cloth) directly over the bleed and press down with maximum body weight using both palms.',
        clinicalNote: 'Maintain uninterrupted manual compression for at least 3 minutes before checking.',
        isUrgent: true
      },
      {
        stepNumber: 3,
        actionVerb: 'Apply Tourniquet',
        instruction: 'If bleeding from an arm or leg does not stop, position a tourniquet 2–3 inches above the wound (between wound and heart). Tighten until bleeding stops completely.',
        clinicalNote: 'Tourniquet application causes substantial pain; reassure the individual that this is normal and life-saving.',
        isUrgent: true
      },
      {
        stepNumber: 4,
        actionVerb: 'Record Time',
        instruction: 'Write the exact application time (e.g., "T 08:30") on the tourniquet label or on the patient’s forehead in marker.',
        clinicalNote: 'Surgeons require precise tourniquet duration data to manage reperfusion injury risks.',
        isUrgent: true
      }
    ]
  },
  {
    id: 'anaphylaxis',
    title: 'Anaphylaxis & Severe Allergic Shock',
    category: 'respiratory',
    urgencyLevel: 'urgent',
    estimatedTime: 'Under 5 minutes for Epinephrine',
    summary: 'Systemic allergic response with airway compromise, wheezing, hypotension, or facial edema requiring prompt autoinjector epinephrine.',
    immediateAction: 'Administer Epinephrine autoinjector into the outer mid-thigh, hold for 3–10 seconds, call 911, keep person reclining.',
    contraindications: [
      'Do not have the patient stand or walk; sudden upright posture in anaphylactic shock can precipitate cardiovascular collapse.',
      'Do not rely solely on oral antihistamines; only epinephrine reverses laryngeal edema and distributive shock.'
    ],
    callDispatcherPrompt: 'Tell 911: "Patient experiencing systemic anaphylaxis with respiratory compromise. Epinephrine administered."',
    steps: [
      {
        stepNumber: 1,
        actionVerb: 'Identify',
        instruction: 'Assess for rapid onset of facial swelling, hives, stridor, throat tightness, dizziness, or vomiting following food, medication, or insect sting.',
        clinicalNote: 'Biphasic reactions can occur; observation in an emergency facility is mandatory even after symptom relief.',
        isUrgent: true
      },
      {
        stepNumber: 2,
        actionVerb: 'Inject',
        instruction: 'Remove safety cap. Push the orange tip firmly into the outer mid-thigh at a 90-degree angle until it clicks. Hold firmly in place for 3 full seconds.',
        clinicalNote: 'Epinephrine can be administered through jeans or clothing in emergency situations.',
        isUrgent: true
      },
      {
        stepNumber: 3,
        actionVerb: 'Massage',
        instruction: 'Remove the autoinjector and massage the injection site for 10 seconds to enhance vascular uptake.',
        clinicalNote: 'Intramuscular vascular absorption is fastest in the vastus lateralis muscle.',
        isUrgent: false
      },
      {
        stepNumber: 4,
        actionVerb: 'Monitor',
        instruction: 'Keep the person lying down with legs elevated unless breathing is difficult. If symptoms persist after 5–15 minutes, a second dose may be administered.',
        clinicalNote: 'Keep used autoinjector in a safe container to hand directly to arriving EMS paramedics.',
        isUrgent: false
      }
    ]
  }
];

export const VITAL_SIGNS_DATA: VitalSign[] = [
  {
    id: 'hr',
    name: 'Resting Heart Rate',
    abbreviation: 'HR',
    unit: 'BPM',
    minVal: 40,
    maxVal: 180,
    normalMin: 60,
    normalMax: 100,
    defaultVal: 72,
    description: 'The number of times the ventricular chambers of the heart contract per minute at rest.',
    clinicalImplicationLow: 'Bradycardia (< 60 BPM): Common in endurance athletes, but may cause lightheadedness or syncope if symptomatic.',
    clinicalImplicationHigh: 'Tachycardia (> 100 BPM): Triggered by physical exertion, fever, stress, or cardiac arrhythmias (e.g. SVT, Afib).'
  },
  {
    id: 'bp_sys',
    name: 'Systolic Blood Pressure',
    abbreviation: 'BP (Sys)',
    unit: 'mmHg',
    minVal: 70,
    maxVal: 200,
    normalMin: 90,
    normalMax: 120,
    defaultVal: 116,
    description: 'Peak pressure exerted against arterial walls during ventricular contraction (systole).',
    clinicalImplicationLow: 'Hypotension (< 90 mmHg): Threatens vital organ perfusion, indicative of dehydration, hemorrhage, or septic shock.',
    clinicalImplicationHigh: 'Hypertensive Urgency (> 180 mmHg): Extreme cardiovascular resistance, elevated risk for stroke and aortic dissection.'
  },
  {
    id: 'spo2',
    name: 'Blood Oxygen Saturation',
    abbreviation: 'SpO2',
    unit: '%',
    minVal: 70,
    maxVal: 100,
    normalMin: 95,
    normalMax: 100,
    defaultVal: 98,
    description: 'Percentage of hemoglobin molecules in arterial blood saturated with oxygen molecules.',
    clinicalImplicationLow: 'Hypoxemia (< 90%): Inadequate tissue oxygen delivery, hallmark of severe pneumonia, asthma, or pulmonary edema.',
    clinicalImplicationHigh: 'Optimal Saturation (95–100%): Adequate pulmonary alveolar gas exchange and healthy circulation.'
  },
  {
    id: 'rr',
    name: 'Respiratory Rate',
    abbreviation: 'RR',
    unit: 'breaths/min',
    minVal: 6,
    maxVal: 45,
    normalMin: 12,
    normalMax: 20,
    defaultVal: 16,
    description: 'The frequency of complete pulmonary breathing cycles (inspiration and expiration) per minute.',
    clinicalImplicationLow: 'Bradypnea (< 12 bpm): Central nervous system depression, opioid toxicity, or severe hypothermia.',
    clinicalImplicationHigh: 'Tachypnea (> 20 bpm): Early clinical sign of respiratory distress, metabolic acidosis, or sepsis.'
  }
];

export const EXHIBITION_QUIZ_DATA: QuizQuestion[] = [
  {
    id: 'q1',
    scenario: 'You find an adult classmate collapsed on the gym floor. They do not respond when you shout and tap their shoulder, and their chest is not rising.',
    question: 'What is your immediate highest-priority first action?',
    options: [
      'Place a pillow under their head and wait 5 minutes',
      'Call 911, retrieve an AED, and start chest compressions immediately',
      'Give them a sip of cold water and elevate their head',
      'Check their student ID and look for allergy bracelets'
    ],
    correctIndex: 1,
    explanation: 'Unresponsive + abnormal breathing indicates cardiac arrest. Immediate emergency dispatch and uninterrupted CPR chest compressions are vital for survival.',
    category: 'Resuscitation'
  },
  {
    id: 'q2',
    scenario: 'During CPR, how deep should chest compressions be on an adult, and at what speed?',
    question: 'Select the clinically recommended compression depth and cadence:',
    options: [
      '1 inch deep at 60 compressions per minute',
      '2 to 2.4 inches (5–6 cm) deep at 100 to 120 compressions per minute',
      '3.5 inches deep at 160 compressions per minute',
      'Gently touch the sternum at whatever pace feels comfortable'
    ],
    correctIndex: 1,
    explanation: 'AHA guidelines mandate 2 to 2.4 inches (5–6 cm) compression depth at 100–120 BPM to maintain adequate cerebral and coronary perfusion.',
    category: 'CPR Standard'
  },
  {
    id: 'q3',
    scenario: 'A teacher suddenly experiences facial drooping on the left side and cannot lift their left arm above shoulder height.',
    question: 'According to the FAST protocol, what should you do?',
    options: [
      'Give them two aspirins and encourage them to take a nap',
      'Massage the arm muscles and test their grip strength for 30 minutes',
      'Note the exact time symptoms started and call 911 immediately for a stroke alert',
      'Ask them to jog in place to improve blood flow'
    ],
    correctIndex: 2,
    explanation: 'Sudden unilateral facial and arm weakness are cardinal signs of stroke. Immediate emergency dispatch with exact onset time enables lifesaving clot-busting treatments.',
    category: 'Neurological Triage'
  },
  {
    id: 'q4',
    scenario: 'A student cuts their forearm on broken laboratory glass. Dark red blood is flowing steadily and soaking through standard bandages.',
    question: 'What is the correct protocol to control the bleeding?',
    options: [
      'Apply continuous, firm direct pressure with clean gauze without lifting it',
      'Rinse the wound with warm water every 30 seconds',
      'Apply a loose bandage and allow blood to drain',
      'Pour alcohol directly into the wound and leave open to air'
    ],
    correctIndex: 0,
    explanation: 'Uninterrupted direct pressure allows the body’s clotting cascade to form a stable hemostatic plug. Never lift gauze to peek, as it tears new clots.',
    category: 'Trauma & Hemorrhage'
  }
];
