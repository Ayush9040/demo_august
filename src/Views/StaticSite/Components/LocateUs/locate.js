import baseDomain from '../../assets/images/imageAsset'
import { locateAsset } from '../../assets/images/imageAsset'

export const locateData = [
  {
    flag: `${baseDomain}${locateAsset.India}`,
    country: 'India',
    add: 'Head Quarter Santacruz East',
    subAdd:
      'Shri Yogendra Marg Prabhat Colony, Santacruz East Mumbai, Maharashtra 400055',
    website: 'https://theyogainstitute.org',
    branches: [
      {
        state: 'Goa',
        notstate:
          'Viva Chorão, Near Our Lady of Grace Church, Madel Chorão, Tiswadi Goa, 403102',
        phone: ['+91-9307047148'],
        website: 'https://theyogainstitutegoa.com',
        email: 'goa@theyogainstitute.org',
        url: 'https://theyogainstitutegoa.com/',
        toRedirect: true,
      },
      {
        state: 'Alibaug',
        notstate:
          'Plot No. Eight/9, Kihim Beach, Navedar Navgaon, Alibaug – 402208',
        phone: ['+91-7738155500'],
        website: 'https://theyogainstitute.org/alibaug',
        email: 'info@theyogainstitute.org',
        url: 'https://theyogainstitute.org/alibaug',
        toRedirect: true,
      },
      {
        state: 'Raipur',
        notstate:
          'The Yoga Institute, Raipur Besides Vidya Kidney Hospital,In front of Indian Chilly Restaurant,Shankar Nagar Main Road Raipur, CG 492012',
        phone: ['+91-9752550490', '+91-982035049'],
        email: 'tyiraipur@gmail.com',
        website: 'https://theyogainstituteraipur.com',
        url: 'https://theyogainstituteraipur.com/',
        toRedirect: true,
      },
      {
        state: 'Rishikesh',
        notstate:
          'The Yoga Institute Rishikesh, BHAVYAM, House No. 4, Gali No. 4, Ward No. 1, Shri Badri Kedar Colony, Lakkad ghat, Khadri khadakmaaf, Yoga Nagri Rishikesh, Uttarakhand - 249204',
        email: 'theyogainstitute.rishikesh@gmail.com',
        url: 'https://theyogainstituterishikesh.com/',
        phone: ['+91-9193831152'],
        toRedirect: true,
      },
      {
        state: 'Delhi',
        notstate:'W-1, W Block (Lower Ground Floor) Greater Kailash Part-1, New Delhi-110048',
        phone: [ '011-35009463', '+91-9599904455', '  +91-9899904455'],
        email: 'tyidelhi@theyogainstitute.org',
        website: 'https://theyogainstitutedelhi.com',
        url: 'https://theyogainstitutedelhi.com/',
        toRedirect: true,
      },
      {
        state: 'Kochi',
        notstate:
          'Namami Health Retreat`s A Wellness Sanctuary 7/156, Mulamkuzhy, Malayttoor, Ernakulam Kochi 683587 – Kerala, India.',
        phone: ['+91-4842621234', '+91-9188952296'],
        email: 'tyikochi@namamihealth.com',
        website: 'https://namamihealth.com',
        url: 'https://namamihealth.com/',
        toRedirect: true,
      },
      {
        state: 'Matunga (CR), Mumbai',
        notstate:
          'Sri Kanyaka Parmeshwari Temple, Plot No 403, Vasavi Nilayam, Telang Road, Matunga (CR), Mumbai.',
        email: 'tyimatunga@theyogainstitute.org',
        phone: ['+91-9343517490'],
        url: 'matunga',
      },
      {
        state: 'Santacruz (W), Mumbai',
        notstate:
          'Rotary Club of Bombay West, Rotary Service Center, Opp. Pernia Pop-up Shop, Mangelwadi, Juhu Tara Road, Santacruz (W), Mumbai - 54.',
        email: 'juhuandheri@theyogainstitute.in',
        url: 'https://jal.theyogainstitute.org/',
        phone: ['+91-9833864964'],
        toRedirect: true,
      },
      {
        state: 'Juhu Center 1, Mumbai',
        notstate:
          '401, Creative Stepz, A-13, Loyalka House, Cross Road No. 8, Model Town Society, Gulmohar Road, Juhu, Mumbai 400049',
        email: 'juhuandheri@theyogainstitute.in',
        url: 'https://jal.theyogainstitute.org/',
        phone: ['+91-9833864964'],
        toRedirect: true,
      },
      {
        state: 'Juhu Center 2, Mumbai',
        notstate:
          'Jamnabai Narsee School, N.S. Road No. 7, JVPD Scheme, Juhu, Mumbai 400049.',
        email: 'juhuandheri@theyogainstitute.in',
        url: 'https://jal.theyogainstitute.org/',
        phone: ['+91-9833864964'],
        toRedirect: true,
      },
      {
        state: 'Mira Road, Mumbai',
        notstate:
          'Royal College of Arts, Science & Commerce , Bhaktivedanta Swami Marg, Srishti Complex, Mira Road East, Maharashtra 401107.',
        // email: 'juhuandheri@theyogainstitute.in',
        url: 'https://jal.theyogainstitute.org/',
        phone: ['+91-9324999989'],//'+91-90043533320', '+91-8655940060',
        toRedirect: true,
      },
      {
        state: 'Vile Parle, Mumbai',
        notstate:
          'Barbhaya Kalpavruksh, Shree Barbhaya orphanage for Hindu girls, 78, SV Road, Between Kotak Mahindra Bank and Adenwala Jewellers, Irla, Vile Parle (W), Mumbai 400056.',
        email: 'juhuandheri@theyogainstitute.in',
        url: 'https://jal.theyogainstitute.org/',
        phone: ['+91-9833864964'],
        toRedirect: true,
      },
      {
        state: 'Kalyan, Mumbai',
        notstate:
          'Saket College, Saket Vidyanagri Marg, Katemenivali, Chinchpada Road, Kalyan, Maharashtra - 421306',
        phone: ['+91-9673134471'],
        url: 'https://jal.theyogainstitute.org/',
        toRedirect: true,
      },
      {
        state: 'Lokhandwala, Mumbai',
        notstate:
          'The Classique Club, New Link Road, behind Infiniti Mall, Phase D, Shastri Nagar, Andheri (W), Mumbai 400053.',
        email: 'juhuandheri@theyogainstitute.in',
        url: 'https://jal.theyogainstitute.org/',
        phone: ['+91-9833864964'],
        toRedirect: true,
      },
      {
        state: 'Malad, Mumbai',
        notstate:
          "The Yoga Institute Malad, Rejoice International School, Next to Bhujavale Talav,  Bhandarwada Marg, Off Zakeria Road, Malad (W).",
        email: 'juhuandheri@theyogainstitute.in',
        url: 'https://juhuandheri.theyogainstitute.org/',
        phone: ['+91-9833864964'],
        toRedirect: true,
      },
      // {
      //   state: 'Vikhroli, Mumbai',
      //   notstate:
      //     'The Yoga Institute, Vikhroli Unit-1, Mahajan Silk Compound, Lal Bahadur Shastri Marg,Surya Nagar, HMPL Surya Nagar,Vikhroli West. Mumbai - 400079',
      //   email: 'tyivikhroli@gmail.com',
      //   url: 'https://theyogainstitutevikhroli.com/',
      //   phone: ['+91-9820696800'],
      //   toRedirect: true,
      // },
      {
        state: 'Andheri East',
        notstate:
          "The Yoga Institute Andheri East, Studio Tranquility, A-209, Shree Nityanand CHS, SN Patil Lane, Sahar Road, next to Andheri flyover, Andheri East, Mumbai.",
        email: 'juhuandheri@theyogainstitute.in',
        url: 'https://juhuandheri.theyogainstitute.org/',
        phone: ['+91-9833864964'],
        toRedirect: true,
      },
      {
        state: 'Andheri(W), Mumbai',
        notstate:
          'MANTHAN Counseling, Lifestyle Management and Yoga Therapy Clinic Madhaveshwar CHS, Madhav Nagar 11/12, Flat no. 9, 1st floor Next to bus depot, Andheri station West, North Gate, Landmark: Merwans Cake shop building',
        email: 'dr_atulvp@yahoo.co.in',
        website: 'https://yogpsychology.com',
        url: 'https://yogpsychology.com/',
        phone: ['+91-8369667701'],
        toRedirect: true,
      },
      

      // {
      //   state:'Andheri (W)',
      
      //   notstate:'Samartha Aishwarya, B-Wing, #710,7th floor, Above Marks & Spencer, Lion Sol Marg, Opp. Highland Park,Lokhandwala Complex, Andheri (West), Mumbai- 400053',
      //   phone:''
      // },
      // {
      //   state:'Powai',
      //   notstate:'The Yoga Institute, Powai C - 308, Kailas Business Park, Hiranandani Link Road, Powai,Mumbai'
      // },
      // {
      //   state:'Indore',
      //   notstate:'The Yoga Institute, 1st Plot No. 3, Akshay Deep Colony MR 9, AB Rd, near Lotus, Indore, Madhya Pradesh 452010'
      // },
    ],
  },
  {
    flag: `${baseDomain}${locateAsset.costaRica}`,
    country: 'Costa Rica',
    add: 'The Yoga Institute, Costa Rica, Modo Elefante,',
    subAdd: 'Provincia de Alajuela, Atenas, 20501',
    mobile: '(506) 8729 3102',
    email: 'tyi@modoelefante.org',
    website: 'https://modoelefante.org/',
    branches: [],
  },
  {
    flag: `${baseDomain}${locateAsset.france}`,
    country: 'France',
    add: 'The Yoga Institute, France Centre Lothlorien,',
    subAdd: 'Domaine de Moiron 52800 Foulain, France',
    mobile: '+33 (0) 325034086',
    website: 'https://centrelothlorien.com/',
    email: 'centrelothlorien@gmail.com',
    branches: [],
  },
  {
    flag: `${baseDomain}${locateAsset.hongKong}`,
    country: 'Hong Kong',
    add: 'Kowloon, Hong Kong, (Opposite Kimberley Hotel),The Yoga Institute,',
    subAdd: 'Nearest MTR exit is :- Tsim Sha Tsui (TST) Exit B',
    mobile: '21919651',
    website: 'https://yoga.org.hk/',
    email: 'life@yoga.org.hk',
    branches: [],
  },
  // {
  //   flag:`${baseDomain}${locateAsset.thailand}`,
  //   country:'Thailand',
  //   add:'Wise Living Yoga Academy, Thailand (Doi Saket Yoga Training Center) 198 Moo 2,',
  //   subAdd:'Luang Nuea Sub-Ditrict, Doi Saket - 50220 Chiang Mai - Thailand.',
  //   mobile:'+66 931783213',
  //   email:'info@wiselivingyoga.com',
  //   website:'https://teachertraining.wiselivingyoga.com/',
  //   branches:[]
  // },
  {
    flag: `${baseDomain}${locateAsset.uae}`,
    country: 'U.A.E.',
    add: 'Jumeirah Lake Towers, Dubai',
    subAdd: '',
    mobile: '+971563801232',
    email: 'info@yogihearts.com',
    website: 'https://yogihearts.com/',
    branches: [],
  },
  // {
  //   flag:`${baseDomain}${locateAsset.urugauy}`,
  //   country:'Uruguay',
  //   add:'The Yoga Institute,',
  //   subAdd:'Studio Jivam Selto, Uruguay',
  //   mobile:'(598) 92918278',
  //   whatapp:'+59892918278',
  //   email:'padmaranidd@gmail.com',
  //   website:'https://studiojiva.com',
  //   branches:[]
  // },
  // {
  //   flag:`${baseDomain}${locateAsset.italy}`,
  //   country:'Italy',
  //   add:'The Yoga Institute,',
  //   subAdd:'Italy',
  //   branches:[]
  // },
]
