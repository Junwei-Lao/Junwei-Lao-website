import project1 from '../assets/images/project-1.svg'
import project2 from '../assets/images/project-2.svg'
import project3 from '../assets/images/project-3.svg'
import project4 from '../assets/images/project-4.svg'
import project5 from '../assets/images/project-5.svg'
import project6 from '../assets/images/project-6.svg'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  codeUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description:
      'A short placeholder description of this project — what it does, the problem it solves, and your role in building it.',
    image: project1,
    tags: ['Tech A', 'Tech B', 'Tech C'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description:
      'A short placeholder description of this project — what it does, the problem it solves, and your role in building it.',
    image: project2,
    tags: ['Tech A', 'Tech D'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description:
      'A short placeholder description of this project — what it does, the problem it solves, and your role in building it.',
    image: project3,
    tags: ['Tech B', 'Tech E', 'Tech F'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description:
      'A short placeholder description of this project — what it does, the problem it solves, and your role in building it.',
    image: project4,
    tags: ['Tech C', 'Tech E'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 5,
    title: 'Project Five',
    description:
      'A short placeholder description of this project — what it does, the problem it solves, and your role in building it.',
    image: project5,
    tags: ['Tech A', 'Tech F'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 6,
    title: 'Project Six',
    description:
      'A short placeholder description of this project — what it does, the problem it solves, and your role in building it.',
    image: project6,
    tags: ['Tech D', 'Tech F'],
    liveUrl: '#',
    codeUrl: '#',
  },
]
