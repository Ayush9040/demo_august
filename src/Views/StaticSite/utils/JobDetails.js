import baseDomain, { careerAssets, experienceAssets } from '../assets/images/imageAsset'

export const Job = [
  {
    jobId: 'job_1',
    jobTitle: 'Content Writer',
    jobQuote:'Let thy words spread the vast wisdom of yoga',
    jobDescription:
      'The responsibilities include all the editorial work of the Institute such as website content creation and edits, blog writing, press releases, and other miscellaneous writing works to actively spread the word about the Institute social work and courses.',
    jobThumbnail: baseDomain + careerAssets.careerAsset1,
    jobRequirements: [''],
  },
  {
    jobId: 'job_2',
    jobTitle: 'Graphic Designer',
    jobQuote:'Express thy creativity to spread the goodness of yoga',
    jobDescription:
      'The responsibilities include using specialized graphic design software to create designs, layouts, animation, custom illustrations, logos, social media creatives, and other design elements. Review and edit final images and designs to meet the specifications. Handle different projects simultaneously and adhere to deadlines.',
    jobThumbnail: baseDomain + careerAssets.careerAsset1,
    jobRequirements: [''],
  },
  {
    jobId: 'job_3',
    jobTitle: 'Video Editor',
    jobQuote:'',
    jobDescription:
      'The responsibilities include reviewing raw materials to determine the final production. Editing video footage using editing tools. Ensuring the project follows a logical sequence. Inserting dialog, sound effects, music, graphics, and special effects. Coordinating with the team to determine production vision. Creating the final production for broadcasting.',
    jobThumbnail: baseDomain + careerAssets.careerAsset2,
    jobRequirements: [''],
  },
  {
    jobId: 'job_4',
    jobTitle: 'Teacher at TYI Branch  ',
    jobQuote:'Use thy imagination to deliver impact',
    jobDescription:
      'Conduct classes at TYI’s different branches. Guide and assess students to enhance their level of practice. Teach the correct techniques adhering to Institute teachings. Share the immense yoga knowledge of the Institute with students. ',
    jobThumbnail: baseDomain + careerAssets.careerAsset2,
    jobRequirements: ['Teachers who have completed an advanced teachers training course will be preferred.','Also, anyone interested in working as a coordinator to coordinate for the centers can apply. '],
  }
]

export const Volunteer = {

  jobId: 'string',
  jobTitle: 'Volunteer Program',
  jobDescription:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  jobThumbnail: baseDomain + experienceAssets.amitabhBacchan,
  jobRequirements: ['Req1', 'Req2', 'Req3', 'Req4'],
}
