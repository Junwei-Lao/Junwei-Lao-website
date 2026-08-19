import generalResume from '../assets/resumes/jane-doe-resume-general.pdf'
import technicalResume from '../assets/resumes/jane-doe-resume-technical.pdf'
import academicResume from '../assets/resumes/jane-doe-resume-academic.pdf'

export interface ResumeOption {
  id: string
  title: string
  description: string
  file: string
  fileName: string
}

export const resumeOptions: ResumeOption[] = [
  {
    id: 'general',
    title: 'General Resume',
    description:
      'A well-rounded overview of your experience, education, and skills — suited for most applications.',
    file: generalResume,
    fileName: 'jane-doe-resume-general.pdf',
  },
  {
    id: 'technical',
    title: 'Technical Resume',
    description:
      'Emphasizes technical skills, tools, and projects — best for software engineering or technical roles.',
    file: technicalResume,
    fileName: 'jane-doe-resume-technical.pdf',
  },
  {
    id: 'academic',
    title: 'Academic Resume / CV',
    description:
      'Highlights education, research, and publications — best for academic or research-focused roles.',
    file: academicResume,
    fileName: 'jane-doe-resume-academic.pdf',
  },
]
