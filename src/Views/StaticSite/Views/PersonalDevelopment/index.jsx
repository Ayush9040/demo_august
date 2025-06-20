import InnerNavComponent from "../../Components/InnerNavComponent";
import './styles.scss'
import { Link } from "react-router-dom";

const PersonalDevelopment = () => {

  const shopNav = {
    title: 'Shop',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  return (
    <div>

    <InnerNavComponent abc={shopNav}/>

      <div className="personal_wrapper">
        <div className="banner-heading">
          YOGA - CONTINUING PERSONAL DEVELOPMENT
          <div className="bottom-line"></div>
        </div>

        <div className="second_heading">
          Programs to Manifest the Potentials Within
        </div>

        <p className="first_para">
          Yoga based <b>Continuing Personal Development Programs</b> are about training our mind to be focused in the present moment & be successful in the field of our choice; personal or professional. Yoga is about our ability to be in the Present which is akin to the state of being Ekagra (one-pointed). This focus helps us to channelize all our energies in a single direction like a laser beam and achieve optimum results. The ability to be in the present also allows a person to respond to the situation as per the need of the moment. Irrespective of the field that you wish to succeed in; emotional or medical, these comprehensive set of programs give an experiential learning through the various practical approaches of Yoga.
        </p>

        
          
      </div>

      <div className="personal_second">
        <ul className="links_internal">
          <li>
            <b><a href="#yoga_1">• YOGA PSYCHOTHERAPY CURRICULUM</a></b>
          </li>
          <li>
            <b><a href="#yoga_2">• HIGHER DIPLOMA IN YOGA AND GESTALT BASED COUNSELLING</a></b>
          </li>
        </ul>

        <div id="yoga_1" className="second_para">
          <div className="internal_heading"><div class="gradient-border">YOGA PSYCHOTHERAPY CURRICULUM:</div>
           
          </div>
          <p className="desc_1">Simple physical Yoga practices alone, including asanas, pranayams, meditations, etc., may not be sufficient enough to provide relief if a person is suffering from chronic and severe psychological states such as Anxiety, Depression, BPD, Addictions, etc.</p>
          <p>Yoga Psychotherapy Curriculum has been specially designed to help overcome these chronic conditions as also the various medical health conditions that arise from this same stress. Hypertension, Obesity, Diabetes, Hypothyroidism, PCOS, Auto-Immune conditions, Asthma, Psoriasis are a few examples of the conditions that have seen to be resolved through this curriculum.</p>

         
        </div>

         <ol className="courses_links">
            
                  <li >
              <Link to="/emo-energy-rebalancing">1. Emo-Energy Rebalancing Workshop - On Campus</Link>
                  </li>
                
                
                  <li >
                  <Link   to="/emo-energy-rebalancing-online">2. Emo-Energy Rebalancing Workshop - Online</Link>
                  </li>
                <li >
                <Link   to="/swadhyay">
                  
                  3. Swadhyay - On Campus
                  
                </Link>
                </li>
                 <li >
                <Link   to="/swadhyay-online">
                 
                  4. Swadhyay - Online
                  
                </Link>
                </li>
                  <li >
                <Link   to="/integral-chakra-psychology">
                
                  5. Integral Chakra Psychology
                  
                </Link>
                </li>
          </ol>

          <div className="second_para">
          <div className="internal_heading"><div class="gradient-border">1.	EMO-ENERGY REBALANCING (Total duration – 50 hours)</div>
            
          </div>
          <p className="desc_1">Our levels of energy speak a lot about the status of our health. Simultaneously, our emotions and energy levels are also closely connected and affected by each other. This workshop will help you not only understand this relation, but also learn simple yet effective techniques to rebalance your emotions and simultaneously your energy levels.</p>
          <p className="desc_1">This workshop also serves as an introduction to the study Chakras which are the seat of energy in relation to our different emotions. The practical aspect of Chakras will be introduced through study of Integral Chakra Psychology.</p>
          <p><b>Duration: </b>20 hours – Workshop Training, 15 hours PRACTICUM (Short Assignments for self-work & 15 hours internship)</p>

         
        </div>

        <div className="second_para">
          <div className="internal_heading"><div class="gradient-border">2.	SWADHYAYA – FOUNDATION TRAINING IN MINDFULNESS & SELF REFLECTION (Total Duration – 75 hours)</div>
           
          </div>
          <p className="desc_1">SWADHYAYA, is the first step towards being in charge of our destiny which is possible only when we are Aware and in-charge of our Thoughts. This is a 5- day workshop, aimed at training ourselves to be aware of our thought processes, control them and there-by harness our own latent potentials. If Awareness is about looking at your-self in the mirror, then Swadhyaya is a training towards decoding what the mirror is showing us. It is an essential training for anyone who wish to work on themselves, irrespective of the route they adopt for the purpose.</p>
          
          <p><b>Duration: </b>45 hours Foundation Training, 20 hours PRACTICUM (self-work through assignments and 10 hours internship).</p>

         
        </div>

        <div className="second_para">
          <div className="internal_heading"><div class="gradient-border">3.	INTEGRAL CHAKRA PSYCHOLOGY – AN INDEPTH EXPLORATION OF BEING 
(Total Duration – 125 hours)</div>

</div>
          <p className="desc_1">If Swadhyaya is a foundation program to understand personal behaviour, then Integral Chakra Psychology is an in-depth diving into the ocean of human behaviour. Every Chakra as a seat of certain emotions is simultaneously a seat of infinite potentials that expresses itself in the form of various personalities. This includes patterns of expectations & sensitivities that goes on to determine our actions and finally our entire behaviour. This training helps us empathise not only with ourselves, but also with those around us, post our learning regarding why we behave the way we behave. </p>
          
          <p><b>Duration: </b>125 hours – Training followed, by 30 hours PRACTUM (Meditation Based Learning and 20 hours – Internship)</p>

         
        </div>

         <div id="yoga_2" className="second_para">
          <div className="internal_heading"><div class="gradient-border">HIGHER DIPLOMA IN YOGA & GESTALT BASED COUNSELLING FOR MENTAL HEALTH (Total Duration – 200 hours)</div>
          
          </div>
          <p className="desc_1">Healing as a process occurs in a step by step manner. It is only when we allow ourselves to heal, that we can be in a position to heal others. It is only then that our intention to heal others is out of true compassion and not for any personal gains. Using the strong foundation of self-growth achieved through the yoga Psychotherapy Curriculum, this 10-month program guides you through the process of skills and attitude training that are important for the success of any counselling session.</p>
          <p className="desc_1">Sessions on the fundamentals of contemporary psychology, counselling and alternative modes of counselling along with the philosophical background of Yoga perspective help develop an overall understanding regarding counselling. This Diploma Program in Yoga Counselling is a practical training that puts you through a scrubbing machine to cleanse away all the blocks that prevent you from shining brightly.</p>
          <p className="desc_1">100 contact hours followed by 60 hours – self-study & 40 hours – internship</p>
          <p className="desc_1">Pre-requisites for Higher Diploma: Yoga Psychotherapy Curriculum</p>
          <p className="desc_1">Program Curriculum to be provided soon</p>
          <p className="desc_1">Probable date for commencement would be around Jan 2026</p>

         
        </div>
      </div>
    </div>
  )
}

export default PersonalDevelopment;