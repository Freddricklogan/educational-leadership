/** Resource configuration: the kit reads this; tests/config.test.js validates it. */
export const config = {
  title: 'Educational Leadership & School Improvement',
  tagline: 'A graduate-level guide to K-12 educational leadership: organizational frames, six leadership models, improvement science and PDSA cycles, data-informed decisions, the politics and law of education, systemic equity and the learning organization, with a frame explorer, a PDSA stepper and an equity audit.',
  repo: 'https://github.com/Freddricklogan/educational-leadership',
  pagesUrl: 'https://freddricklogan.github.io/educational-leadership/',
  quizTitle: 'Five questions on educational leadership',
  quiz: [
    {
      id: 'frames',
      prompt: 'A principal explains every problem as a mismatch of roles, rules and workflows. In Bolman and Deal’s terms, which single frame is she using, and what is the risk?',
      options: ['Symbolic; she will over-invest in ritual', 'Structural; leaders who see through one frame are chronically surprised', 'Political; she will read every dispute as a power contest', 'Human resource; she will mistake morale for performance'],
      answer: 1,
      explanation: 'The structural frame sees the school as a rational system of roles, rules and coordination. Reframing — deliberately looking through the structural, human-resource, political and symbolic frames — is what turns confusion into choice.'
    },
    {
      id: 'pdsa',
      prompt: 'Why does the resource insist a PDSA test be small and fast — one grade team, a handful of students, two weeks?',
      options: ['So the results reach statistical significance', 'So the school learns cheaply before it commits, and the cycle seeds the next test', 'Because larger tests require board approval', 'To satisfy the improvement network’s reporting cycle'],
      answer: 1,
      explanation: 'A cycle rarely succeeds or fails outright; it produces learning that seeds a better test. Improvement is a staircase of cycles, not a single leap, and a small test is the cheapest way to learn.'
    },
    {
      id: 'data',
      prompt: 'Which four types of data does the resource say a leader should intersect, after Bernhardt?',
      options: ['Formative, summative, diagnostic, benchmark', 'Demographic, perceptual, school-process, student-learning', 'Attendance, discipline, grades, test scores', 'Federal, state, district, school'],
      answer: 1,
      explanation: 'Bernhardt’s four types are demographic, perceptual, school-process and student-learning data; the insight lives where they intersect, and the inquiry cycle asks for a root cause rather than a symptom before acting.'
    },
    {
      id: 'law',
      prompt: 'Under Tinker v. Des Moines, when may a school regulate student expression?',
      options: ['Whenever it is critical of the school', 'Only with parental consent', 'When it materially disrupts school, with further limits for lewd, school-sponsored or drug-promoting speech', 'Never, on campus or off'],
      answer: 2,
      explanation: 'Students do not shed their rights at the schoolhouse gate; expression is protected unless it materially disrupts school. Bethel, Hazelwood, Morse and Mahanoy carve out the lewd, school-sponsored, drug-promoting and off-campus cases.'
    },
    {
      id: 'equity',
      prompt: 'What does the resource mean by "the gaps are produced, not given"?',
      options: ['Achievement gaps reflect differences in student effort', 'Disparities are produced by structures — finance, sorting, discipline, whose culture counts as normal', 'Gaps close on their own as schools improve', 'Gaps are measurement artefacts'],
      answer: 1,
      explanation: 'Reliance on local property taxes, tracking into advanced courses, exclusionary discipline and a curriculum that treats one culture as normal produce the disparities; an equity audit examines access, treatment and outcomes by group.'
    }
  ]
};
