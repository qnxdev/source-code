import React, { Component } from "react";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import "./Research.css"
import "../Components/Tables/tableformat.css";

class Reserch extends Component {
    state = { showMenu: false };
    openMenu = () => {
        console.log("opening Menu");
        this.setState({ showMenu: true });
    };
    closeMenu = () => {
        this.setState({ showMenu: false });
    };

    HomePageHeader = {
        instanceID: "HomePageHeader"
    };
    HomePageFooter = {
        instanceID: "HomePageFooter"
    };
    HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
    };
    HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
    };
    // ResearchImg = {
    //     instanceID: "ResearchImg",
    //     image: "cover2-1.jpg",
    //     width: "93%"
    // }
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Publications"
    }
    
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                
                                  
                    <table id="publicationtable">
                        <tr><th>List of Publications</th></tr>
                        <tr><td>Dr.Anoop C .K, Princy N Paul, Maria James,Nihal Noor &R.Harikrishnan published a Manuscript on the topic entitled “Technological & Green solutions for Rural House Construction-A review” in International Research Journal of Engineering &Technology(IRJET),ISSN(2395-0056),Volume 5,Issue 4,April2018.</td></tr>
<tr><td>Tina Jose, CimyonaVinbi, FarzaSalim, Johns Mathew &SreekuttyRaghavu published a paper on “A Study of Variation in PPV through Different Types of Soil Using Geo-phones during Blast Loading”, in International Research Journal of Engineering and Technology(IRJET),, e-ISSN:2395-0056, p-ISSN:2395-0072, Volume 5, Issue 2, February 2018.</td></tr>
<tr><td>Bijimol Joseph, Rishiraj P Moni, Dangy George &Jithin Jose , published a paper on “Design and analysis of anchor block and penstock pipe of a hydroelectric project”, in International Research Journal of Engineering and Technology (IRJET) , Volume: 05 ,Issue: 03 , (pp 1063- 1065) , March 2018.</td></tr>
<tr><td>Neena M Joseph, Basil Jolly, Gayathry N. P, Harikrishnan S, Joseph Roy &Salini P.N, published a paper on “Link Volume And Capacity Utilisation Of Roads in Kondotty Town”, in International Research Journal of Engineering and Technology (IRJET), Volume: 05 Issue: 02,ISSN: 2395-0056, Feb-2018</td></tr>
<tr><td>Minu C Joy, Anjana T C, Anusree S, GiyaRisa Sebastian &MerinMariya Paul, published a paper on “Water Supply Scheme for Kakkalampara, MaradyPanchayath in Ernakulam District, Kerala”, in International Journal for Research in Applied Science & Engineering Technology (IJRASET), Volume 6 Issue III, March 2018.</td></tr>
<tr><td>Bilu Baby,DevinaVipinan, BlessyTreesa Baby, Jelita P Xavier &MuhammedHafis, published a paper on “Effect of coir fibre on stone matrix asphalt(SMA) with marble waste as filler”, in International Research Journal of Engineering and Technology(IRJET),e-ISSN No 2395-0056, Volume 05, Issue 02, pp 1899-1902,Feb 2018.</td></tr>
<tr><td>Appu John, AswathyWarrier D, Hanna Mini Sabu, MariamolMathew&Sneha George, published a paper on “Estimation of a Reinforced Building: A Review”,in International Research Journal of Engineering and Technology (IRJET), Vol.05, Issue 02, Page No. 1680-1682, February 2018.</td></tr>
<tr><td>Soorya R, Ashwin Alias, NazneenNazeer, Reshma Jose &Sritha Ravi, published a paper on “Study on Design of Water Treatment Plant at Paingottoor”, in International Research Journal of Engineering and Technology (IRJET), Volume: 05 Issue: 02 page: 1144-1147| Feb-2018.</td></tr>
<tr><td>Lins Paul Kuriakose, A Madheeha, Amal Francis, Basil Joseph Baby &MowshmiSubramannyan, published a paper on "Comparative Study on Performances of Clay - Bentonite and Bentonite - Quarry Dust Mixture as Landfill Liner ",in International Journal of Engineering Research and Application(IRJET),, Vol.8,Issue 3, PageNo:49-52,March 2018.</td></tr>
<tr><td>Stephy Jacqueline George,Aju Joan George,DeniTreesaDominic,NimishaSunny &Nirmal Antony published a paper on the topic” Permeable Concrete- An Innovative Solution for Groundwater Replenishment”,in International Journal of Innovative Research in Science, Engineering and Technology(IJIRSET),Volume  7,Issue 2,February 2018.</td></tr>
<tr><td>Tintu Shine A.L, Nikhil Roy & Joyal Jose published a Research Paper on the topic titled “Comparitive Experimental Investigation on Strength Characteristics of Concrete mixed with Magnetized water” in International Journal of Innovative Research in Science ,Engineering & Technology(IJIRSET),ISSN(Online:2319-8753),Volume 7,Issue 2,February 2108.</td></tr>
<tr><td>Hannah S. Mattam, Raunac K. Paulose,Sherin Robert & Vijay Mathew, published a paper on” A Study on Flow and Strength Characteristics of Superplasticized Concrete”, in International Research Journal of Engineering and Technology (IRJET), Volume 5, Number 2, ISSN NO: 2395-0056, pp. 2192-2195, February 2018.</td></tr>
<tr><td>Nivya Mary Abraham, Jerald Baby Joseph, Jinu John, Manu Biju& Sharon Philip, published a paper on "Groundwater Quality Assessment Near Municipal Solid Waste Dumping Site at Mudavoor, Muvattupuzha", in International Research Journal of Engineering and Technology (IRJET), Volume: 05 Issue: 02, Feb 2018.</td></tr>
<tr><td>Anu Paul, Gifty George, IylinJoshy, Sreelekha C & Theresa SajnaSojan published  a Research Paper on the topic titled “Study on the Filter Media for Constructed Wetlands” in International Journal of Innovative Research in Science ,Engineering & Technology(IJIRSET),ISSN(Online:2319-8753),Volume 7,Issue 3,March 2018</td></tr>
<tr><td>Soumya Rani P Thomas, Abhijith R, Aditya Joseph , & Vishnu Unnikrishnan, published a paper on “Improvement in Shear Strength of Soil Reinforced with Pineapple Fibre”, in International Research Journal of Engineering and Technology(IRJET),, Volume: 05 Issue: 02 | Feb-2018,March 2018.</td></tr>
<tr><td>VineethaThanakchan, Anand Ramesh, Anandhu K J, AnlySaju&Jerin K Jain  published a paper on the title  “Coconut Shell as Partial Replacement of Coarse Aggregate in Concrete” in International Research Journal of Engineering and Technology(IRJET),,ISSN:2395-0056, February 2018.</td></tr>
<tr><td>VineethaThankachan, Ashwin Alias, published a paper on “Review on Applications of Smart Glass in Green Buildings, Presented in " International Conference on Green Buildings and Sustainable Engineering" , in conference proceedings, Rajagiri School of Engineering and Technology, January 2018.</td></tr>
<tr><td>Vishnu Krishnan,AlishabanNazar, Ashily Sunny, MarieneAnnu Philip & Marshal Tomy, published a paper on "Geotechnical Characterization of Dredged Marine Clay From Cochin",in International Research Journal of Engineering and Technology (IRJET), Volume: 05 Issue: 03, e-ISSN: 2395-0056, march-2018</td></tr>
<tr><td>Basil Baby,Daniel A V , Albin S Vayattattil,AleenaJacob,RijoJohny&Sangeetha P Mundackal, published a paper on “Crack Assessment In Structural Members: A Review On Recent Paradigms”, in International Research Journal of Engineering and Technology (IRJET), Volume: 05, Issue: 03, Mar-2018.</td></tr>
<tr><td>Nisa Ann Mathew, Asha Mathew, BalaMurali Krishna, Deaphan T Thengumpallil,  &MeeraHaridas, published a paper on “Capacity Utilisation of Koothattukulam - North Palakkuzha stretch In Kerala, India”,in International Research Journal of Engineering & Technology(IRJET), Volume 5, Issue 3, March 2018.</td></tr>
<tr><td>Finu John,Elsa Maria Jose, Manu Varghese, MeghaAntu&Megha Joy, published a paper on “Experimental Study on Improvement of Soil Subgrade Reinforced with Banana and Coir Fibers”, in International Research Journal of Engineering and Technology(IRJET),Volume 5, Issue 3, pp.743-744, March 2018.</td></tr>
<tr><td>Rose Mary Xavier,BistaMartin,Leo Avira Babu , Liya Elizabeth Jose &Liya Roy published a paper on “A Review on Fiber Modified Stone Matrix Asphalt”,in International Research Journal of Engineering and Technology(IRJET),Volume 5,Issue 03,March 2018.</td></tr>
<tr><td>JerinJose,AshikaJose,Jaise Mary Kurian,K Jose Francis &Sanju K James ,published a paper on “Stabilization of Expansive soil using Fly ash”,in International Research Journal of Engineering & Technology(IRJET),Volume 05,Issue 03,March 2018</td></tr>
<tr><td>Abhijith R, Ajay Balan,AmalJohn,Shyson Sunny & Tom Kachapilly,published a paper on “Integrated Coastal Zone Management of Cochin Coast using Remote sensing and GIS”,in International Journal of Innovative Research in Science, Engineering and Technology(IJIRSET),Volume 7,Issue 6,June 2018.</td></tr>
<tr><td>Dr.Anoop C .K, Abhishek Baby, Sneha Elsa Cheriyan, Tina Maria Jacob published a Manuscript on the topic “Design of Sanitary Landfill at Brahmapuram Solid Waste Treatment Plant”in  International Journal of Scientific Research and Review, Volume 8, Issue 6, June 2019.</td></tr>
<tr><td>Nisa Ann Mathew, AbinSilven,EminEldho, SavithaDominic, Tobin Joy  published a paper on “Identification of Accident BlackspotsalongNH-85”, in International Journal of Scientific Research and Review, Volume 8, Issue 6, June 2019.</td></tr>
<tr><td>Rose Mary Xavier, Ashna P Salim, Bsil M Babu, FathimaMuhammed PM published a paper on “Identification of Suitable Site and Design Proposal of Water Storage Structure at VJCET” in International Research Journal of Engineering Science and Computing, Volume 9, Issue 6, June 2019.</td></tr>
<tr><td>Jerin Jose, Kiran S Chirayath, M.A MuhammedRiswan, Megha Shankar, Rose Mariya George published a paper on “Feasibility Study and Analysis of Pedestrian Subway at Vyttila Junction, Kochi, Kerala” in International Journal of Scientific Research and Review, Volume 8, Issue 6, June 2019.</td></tr>
<tr><td>Jerin Jose, Kiran S Chirayath, M.A MuhammedRiswan, Megha Shankar, Rose Mariya George published a paper on “Design of Box Culvert using Limit State Method” in International Journal of Scientific Research and Review, Volume 8, Issue 6, June 2019.</td></tr>
<tr><td>Mr.AmelAustine, “A study on device discovery for D2D Communication”, IJRASET ,Volume 7,Issue 6,June 2019</td></tr>
<tr><td>Dr.Anishin Raj et.al,  “A Hybrid Approach for Video Steganography by Stretching the secret Data”,ICICCT 2019 International Conference, -Springer indexed, Springer Lecture Notes proceedings, SCOPUS, Tamil Nadu, March 2019 ISSSN: 2367-3370.</td></tr>
<tr><td>Dr.Anishin Raj et.al, “Comparison of various Image Segmentation Techniques”, IETE-Springer Journal Proceedings, 2019, ISSN: 2524-5740</td></tr>
<tr><td>Dr.Anishin Raj et.al , “A survey on various Segmentation Techniques in Image processing”, International Journal of research and Analytical Reviews, ISSN:2349-5138 Vol 6, Issue 2, April 2019.</td></tr>
<tr><td>Dr.Anishin Raj et.al , “A Survey on Defogging Approaches”, International Journal of research and Analytical Reviews, ISSN:2349-5138, Vol 6, Issue 1, March 2019.</td></tr>
<tr><td>Dr.Anishin Raj et.al , “Evaluation of various Segmentation Techniques in Digital Image processing”, International Journal of research and Analytical Reviews, ISSN:2349-5138, Vol 6, Issue 2, April 2019.</td></tr>
<tr><td>Mr.Basil Baby, “Survey on analysis of energy optimization in MANET routing in International Journal of Engineering and Technology”, Aug-18</td></tr>
<tr><td>Mrs.Neenu Daniel, “Deep Learning Techniques for Face Recognition: A Review”, IJRASET, Volume 7,Issue 6,June 2019</td></tr>
<tr><td>Mr. Andrews Jose, “Recent advances and investigation of efficient Computer Aided Diagnosis systems for CT images in Liver cancer detection”, ICCIDT 2019, organized by Mangalam College, Ettumanoor, Kerala April 2019 </td></tr>
<tr><td>Mr. Andrews Jose, “Assessment of Course Outcomes in an Engineering Laboratory Course Using Excel VBA Macros”, World Summit on Accreditation – WOSA 2018 organized by NBA at New Delhi September 2018</td></tr>
<tr><td>Mr.Andrews Jose, “A Survey Paper on Fingerprint Recognition and Cross Matching”, International Journal for Research in Applied Science Engineering Technology (IJRASET), Volume 7,    Issue 5, May 2019</td></tr>
<tr><td>Mrs.SabithaRaju, “A Survey on Surgical Phase Recognition Approaches”, International Journal for Research in Applied Science Engineering Technology(IJRASET), Volume 7, Issue 5, May 2019</td></tr>
<tr><td>Mrs.Dona Jose, “A Fog Based Security Model for Electronic Medical Records in the Cloud Database”, International Journal of Innovative Technology and Exploring EngineeringVolume-8 Issue-7, May 2019</td></tr>
<tr><td>Mrs.Dona Jose, “Assessment of Course Outcomes in an Engineering Laboratory Course Using Excel VBA Macros”, World Summit on Accreditation – WOSA 2018 organized by NBA at New Delhi September 2018</td></tr>
<tr><td>Mrs.Remya Paul, “Survey on various techniques to decode low quality QR Codes”, International Journal of Inventive Engineering and Sciences (IJIES), Volume5, Issue,4 May 2019.</td></tr>
<tr><td>Dr. K KRajan and Dr. B. Aruna , S Anju “ Development of level sensor for Lead lithium loop system”, 2019 Thrid IEEE International Conference on Electrical Computer and Communication Technologies (IEEE ICE CCT 2019), SVS college of engineering, Coimbatore, 20-22 February 2019</td></tr>
<tr><td>Dr. K KRajan and Dr. B. Aruna , S Anju “  A review on flow measurement in sodium cooled fast reactor circuits”, Third IEEE International Conference on Electrical Computer and Communication Technologies (IEEE ICE CCT 2019), SVS college of engineering, Coimbatore, 20-22 February 2019</td></tr>
<tr><td>Dr. K KRajan and Dr. B. Aruna, “Sodium-a coolant for fast breeder reactors”, International conference on Advancement in science and Humanities, March 21-23, 2019, St. Thomas College, Thrissur</td></tr>
<tr><td>K.K. Rajan1, B. Aruna1, V. Akhil1, S. Verma2, P. R. Pedada2, R. Bhattacharyay2, “Development Of Level Sensor for Lead Lithium Loop System”,  NFP-PFRC Vision Meeting 2018, 1Viswajyothi College of Engineering and Technology, Vazhakulam, Kerala, India- 686670,2 Institute for Plasma Research,  Gandhinagar, Gujarat, India-382428,26-28 April, 2018 at Nirma University, Ahmedabad.</td></tr>
<tr><td>Simi ZerineSleeba, “ReDC: Reduced Deflection Chipper”, International Symposium on Embedded Computing and System Design (ISED), December 2018.</td></tr>
<tr><td>Simi ZerineSleeba, “DoLaR: Double Layer Routing for Bufferless Mesh Network-on-Chip”, (Accepted for publication in) Proceedings of the 31st IEEE TENCON Conference [TENCON-2019], Kochi, India, October, 2019.</td></tr>
<tr><td>Simi ZerineSleeba, “Asymmetric Routing in 3D-NoC using Interleaved Edge Routers”, (Accepted for publication in) Proceedings of 12th International Workshop on Network on Chip Architectures [NoCArc-2019], Co-located with IEEE/ACM International Symposium on Microarchitecture, Columbus, Ohio, USA, October, 2019.</td></tr>
<tr><td>Simi ZerineSleeba, ”2L-2D Routing for Buffered Mesh Network-on-Chip”</td></tr>
<tr><td>Proceedings of the 23rd International Symposium on VLSI Design and Test [VDAT-2019], Indore, India, June, 2019.</td></tr>
<tr><td>RanjiniSurendran, “Scene Understanding using DeepNeural Networks :Objects, Actions and Events: A Review”, International Conference on Innovative Computing and Communication, ICICC-2019 on 21st& 22nd March 2019, Springer, Organized by Faculty of Electrical Engineering and Computer Science, VŠB -Technical University of Ostrava Czech Republic, Europe.</td></tr>
<tr><td>Melvin C Jose, “A novel wideband pattern reconfigurable antenna using switchable   parasitic stubs”, Microw. Op. technolLett. 2018; 1–7.</td></tr>
<tr><td>Melvin C Jose, “Laser Micro-machined 28 GHz Broad Band Single Feed Microstrip Antenna for 5G mm-Wave Applications”, Journals in Emerald Circuit World publication, 2019.</td></tr>
<tr><td>Melvin C Jose,” Design of 28GHz High Gain 5G MIMO antenna array system,” in IEEE TENCON conference 2019.</td></tr>
<tr><td>Anju Susan George1, A Shajin Nargunam2, “Cloud data integrity checking methods: a survey”, International Journal of Engineering & Technology, 7 (4) (2018) 4791-4794 International Journal of Engineering & Technology doi: 10.14419/ijet. v7i4.23667.</td></tr>
<tr><td>Diana Baby, Sujitha Juliet Devaraj "Feature Extraction Techniques for Leukocyte Classification - A Review" International Journal of Engineering & Technology, 7 (2.24) (2018) 155-158.</td></tr>
<tr><td>Juliet A Murali,T Brindha,“Scheduling Algorithms in Cloud Environments: A Comparative Study”, International Journal of Engineering and Technology(IJET-UAE), ISSN 2227-524X, vol.7, n0.4, pp:4841-4845, 2018.</td></tr>
<tr><td>Juliet A Murali,T Brindha “Analysis of Scheduling Algorithms in Hadoop “, Springer International Conference on Soft Computing Systems, ICSCS.Communications in Computer and Information Science book series , ISSN 1865-0929,vol. 837, pp:25-34, , 2018,.</td></tr>
<tr><td>Diana Baby et.al. presented a paper on “A Performance Comparison of Supervised and Unsupervised Image Segmentation Methods” in Springer International conference on International Conference on Adaptive Computational Intelligence  2019 (ICACI 2019) at GSSS Institute of Engineering & Technology for Women, Mysuru, India</td></tr>
<tr><td>Juliet A Murali,T Brindha, “ Resource Management  Models  for  Cloud Computing “ ,International Conference On Networks Image and Security ICNIS 2019.</td></tr>
<tr><td>Vinoj K , Dr. R Raja Friction Stir Welding on Dissimilar Alloys - A Critical Review" International Journal of Mechanical Engineering & Technology pp 1406-1413 ISSN:0976-6359</td></tr>
<tr><td>Yaser, E.M. and Shunmugesh, K., Multi-objective optimization of milling process parameters in glass fiber reinforced polymer via grey relational analysis and desirability function. Materials Today: Proceedings, 11, 2019. pp.1015-1023.</td></tr>
<tr><td>Shunmugesh, K., Optimization of Glass Fiber Reinforced Polymer (GFRP) using Multi Objective Taguchi function and TOPSIS. Materials Today: Proceedings, 11, 2019. pp.952-960.</td></tr>
<tr><td>Shunmugesh, K. and Panneerselvam, K., Multi-performance optimization of micro-drilling using Taguchi technique based on membership function. Indian Journal of Engineering and Materials Sciences (IJEMS) IJEMS Vol.25 [2018]  [October 2018] 383 – 390</td></tr>
<tr><td>Shunmugesh K, Panneerselvam K , Multi-performance Optimization of Drilling Carbon Fiber Reinforced Polymer Using Taguchi: Membership Function. Transactions of the Indian Instituteof Metals. 2018 Jul 1;71(7): 1615-1627.</td></tr>
<tr><td>Jenarthanan MP, Jeyaraj S, Shunmugesh K., Experimental Investigation on Electro-codeposition Nickel-Weld Slag Composite Coating. Transactions of the Indian Institute of Metals. 2018 Jul 1;71(7): 1771-1779.</td></tr>
<tr><td>Joy, B., Shunmugesh, K., Kumar, M.P. and Arun, K., Optimization in Turning of 11sMn30 ThroughProcess Capability Index. Materials Today: Proceedings, 11, 2019.  pp.961-970.</td></tr>
<tr><td>Unnikrishnan T G , “Effect of Ni and Cr Content on the Hardness of Brass Alloys” International Journal for Scientific Research & Development, 6(05), (2018), 599-601</td></tr>
<tr><td>Unnikrishnan T. G, Akhil K. T, Rakesh Jose, and Pramod Kumar M “High Entropy Alloys – A Review” International Journal for Scientific Research & Development, 6(05), (2018), 591-594</td></tr>
<tr><td>Mr. Nibin B, Dr. Easwaran N, Mr. Rijo J. “Thermodynamic Analysis of an Integrated Gas turbine Power Plant Utilising cold Exergy of LNG" Journal of Mechanical Engineering and Sciences, Volume 12, Issue 3, September 2018.</td></tr>
<tr><td>Mr. Jerry Varghese, Mr. RamuMurugan “Influence of orientation of extrusion direction and strain rate on the mechanical behaviour of extruded thermoplastic sheets” Materials Today Proceedings : ISSN NO: 2214-7853</td></tr>
<tr><td>AjoIssacJohn ,Lovin Varghese , Eldhose  Paul,Analysis of flue gas from plastic waste International Journal of Innovative Research in Science Engineering and Technology, Vol 7 Issue 6,  ISSN No 2319-8753.</td></tr>
<tr><td>AnithaRajan, “A study on English Language Teaching and Training of Listening Skills with reference to rural CBSE learners in Kerala” in Praman Research Journal, An ISO : 7021-2008 Certified Journal Volume 9, Issue 6, June- 2019. </td></tr>
<tr><td>AnithaRajan “Technology–assisted Techniques To Improve Listening Skills Among Rural Learners ” in Research Scholar, An International Refereed e-Journal on Literary Explorations.,(ISSN: 2320-6101),Vol. 7 Issue III, August 2019.</td></tr>
<tr><td>Tina Jose, Basil Mathew, Geena Johny, Melvin Paul Benny, Sharon Reji, published a paper on “Feasibility of Sea-Sand Sea-Water Concrete” in International Journal of Engineering Research & Technology (IJERT), ISSN: 2278-0181, Vol. 8 Issue 08, August-2019.</td></tr>
<tr><td>Tina Jose, Basil K. Alias, Deepanjaly S. Shaju, Sagar Tomy & Sreelakshmi R. published paper on "A case study on the design on the design of geocell reinforced flexible pavement”, in International Research Journal of Engineering and Technology (IRJET) e-ISSN: 2395-0056 Volume: 07 Issue: 05, May 2020, p-ISSN: 2395-0072, page no.-1737- 1739.</td></tr>
<tr><td>Tina Jose, Albin Sunny, Bensy Baby, Helena Binoy, Thoms V. Santhosh published paper on "Energy Efficient Convention Center", in International Research Journal of Engineering and Technology (IRJET) e-ISSN: 2395-0056  Volume: 07 Issue: 04 , Apr 2020 , p-ISSN: 2395-0072 , page no-6152- 6154</td></tr>
<tr><td>Dr. Anoop C.K, Abhishek Baby, Tina Maria Jacob, Sneha Elsa Cherian, published a paper on “Design of Sanitary Landfill at Brahmapuram Solid waste Treatment Plant” in International Journal of Scientific Research and Review, ISSN No: 2279-543X, Vol. 8, Issue 6, June- 2019.</td></tr>
<tr><td>Dr. Anoop C.K & Dona Elizabeth, published a paper on “A review on the Great Barrier Relief: Australia” in International Journal for Research in Applied Science & Engineering Technology  (IJRASET), ISSN: 2321-9653, Vol 7, Issue VIII, Aug 2019, Pp 631-635</td></tr>
<tr><td>Dr. Anoop C.K & Mathews Mathew, published a paper on “Opportunities of Sponge city as a solution for urban water logging and water security” in International Journal for Research in Applied Science & Engineering Technology (IJRASET), ISSN: 2321-9653, Vol 7, Issue VIII, Aug 2019, Pp 636-639</td></tr>
<tr><td>Dr. Anoop C K , Irene Ann Issac, published a paper on “Analysis of Building Information Modelling and Scope of BIM in India” in International Journal of Engineering Research and Technology (IJERT), ISSN: 2278-0181, Volume 8, Issue 11, November 2019, Pp 72-76.</td></tr>
<tr><td>Dr. Anoop C.Ket al., published a paper on "Identification of sites and structures for water harvesting using GIS" in International Research Journal of Engineering and Technology, Vol.7 Issue 04 / Apr 2020</td></tr>
<tr><td>Dr. Anoop C.Ket al., published a paper on "Comparative study on Air Quality index and air pollution levels in major zones of Ernakulam City" in International Research Journal of Engineering and Technology. Vol 07 Issue 05 / May 2020</td></tr>
<tr><td>Dr. Anoop C.K et al., published a paper on “A review Case study on Particulate matter at construction site at Kochi” in International Journal of Innovative Research in Science Engineering and Technology, Vol 9 Issue 3 / March 2020</td></tr>
<tr><td>Dr. Anoop C.K et al., published a paper on "A review on Great Barrier Reef, Australia " in International Journal for research in applied Sciences and Engineering Technology, Vol 7 Issue 8, Aug 2019</td></tr>
<tr><td>Dr. Anoop C.K et al., published a paper on "Opportunities of sponge city as a solution for urban water logging and water security in India" in International Journal for research in Applied Science and Engineering Technology, Vol 7 Issue 8, Aug 2019</td></tr>
<tr><td>Dr. Anoop C.K et al., published a paper on "Analysis of Building Information Modelling scope of BIM in India" in International Journal of Engineering Research and Technology, Vol 8 Issue 11, Nov 2019</td></tr>
<tr><td>Bijimol Joseph, Amal Joe Abraham, Jowin Mathew John, Rahul P.R.,Vyshagh M. published a paper on "Affordable Rehabilitation using GFRG panels", in International Research Journal  of Engineering and Technology(IRJET),Volume 6 ,Issue 8,August 2019.</td></tr>
<tr><td>Bijimol Joseph, Adharsh Unnikrishnan, Alan Mathew, Anandhu Soman, Anoop K.V.,published a paper on "A Case Study on Periyar Valley Irrigation Project ", in International Journal for Research in Applied Science and Engineering Technology (IJRASET), Volume 8, Issue IV, April 2020.</td></tr>
<tr><td>Amrutha S, Anish Sudarsan, Nabeel P Sainudeen, published a paper on "A Comparative Study on Soil Stabilization Using Natural and Artificial Fibres", in International journal of Creative Research and Thoughts(IJCRT) , Vol. 8 - Issue 4 (April 2020), ISSN: 2320-2882. Pag3528 </td></tr>
<tr><td>Amrutha S, Cyril George, Gayathri Biju, Hema Madhu, Vishnu Dilip, published a paper on "A Case Study on Quality Evaluation of Soil and Water in a Quarry and in its vicinity" in  International journal of Creative Research and Thoughts(IJCRT), Vol. 8 - Issue 4 (Apri2020), ISSN: 2320-2882. Page:3686-3689</td></tr>
<tr><td>Devina Vipinan, Amiyon S Thekkumkattil, Diya George, Josmy George, Rincy Johny, published a paper on "Comparative study of COD Removal by Adsorption using Orange, Lemon and Banana Peels" in International Journal for Research in Applied Science & Engineering Technology (IJRASET), Vol.8-Issue 5(May 2020),ISSN:2321-9653.Page:827-830</td></tr>
<tr><td>Devina Vipinan, Aneena Wilson, Nigha Benny, P. S. Meera, Unnimaya Shymon, published a paper on "Organic Waste as Soil Substitute through Box Composting" in International Journal for Research in Applied Science &Engineering Technology (IJRASET),  Vol.8-Issue 4(April 2020), ISSN:2321-9653.Page:147-150</td></tr>
<tr><td>Appu John, Albin Antony, Basil M Binu, Damy Jose, Jonath Shibu Pullorkudyil, published a paper on "Design and Fabrication of Super adobe and its Scope in Kerala” in International Research Journal of Engineering and Technology(IRJET), Vol. 7- issue4 (April 2020), ISSN:2395-0056.</td></tr>
<tr><td>Lins Paul Kuriakose, Anjana Vijayakumar, Fathima Shirin, Jills Roy, published a paper on “Experimental investigation on removal of sulphate ion concentration adopting soil filter system" in International Research Journal Journal of Engineering and Technology(IRJET), Vol. 7 - Issue 3 (March 2020), ISSN: 2395-0056. Page:01-03</td></tr>
<tr><td>Lins Paul Kuriakose, Anjana Vijayakumar, Fathima Shirin, Jills Roy, published a paper on “Investigation of Charcoal mix on Unconfined Compressive Strength of soil" in International Journal of Engineering Research and Applications (IJERA), Vol. 10 - Issue 3 (March 2020), , ISSN: 2248-9622. Page:31-33</td></tr>
<tr><td>Tintu Shine A L, Dona Elizebeth Dolly, Mathews Mathew, Jaison James, published a paper on "Advantages of Green Material Used Construction" in International Research Journal of Engineering and Technology(IRJET), entitled  Vol. 7- Issue 3(March 2020), ISSN 2395-0056</td></tr>
<tr><td>Tintu Shine A L, Dona Elizebeth Dolly, Mathews Mathew, Jaison James, published a paper on "Design of green and Sustainable Industrial Parks" in International Journal for Research in Applied Science & Engineering Technology (IJRASET), Vol. 8- Issue III(March 2020), ISSN 2321-9656</td></tr>
<tr><td>Tintu Shine A L, Fincy Babu, Dileep M., published a paper on "Mesoscopic analysis of reinforced concrete beams’’ in Coupled System Mechanics, Vol. 8- No: 4 (May 2019), ISSN 2234-2192</td></tr>
<tr><td>Jerin Jose, Akhil Sunil, Gijo Paul, Sandra Rojas, Texla Felix, published a paper on "Partial Replacement of Cement in Concrete with Granite Waste Powder" in International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), Vol. 9- Issue 4(April 2020), ISSN 2347-67101. </td></tr>
<tr><td>Jerin Jose, Abhinand S, Ajwin Jose Francis, Charles George , Rahul Raj, published a paper   on "Review on Amphibious Structure for Live stocks" in International Journal for Research in Applied Science &Engineering Technology (IJRASET), Volume 8, Issue III, March 2020</td></tr>
<tr><td>Anu Paul, Amitha Emmanuel, Basil Varghese Jhoni, Janet Varghese & Krishnapriya K.S, published a paper on "Proposal of Effective Storm water Mangement over Pavements" in International Journal of Creative Research Thoughts(IJCRT), ISSN:2320-2882,Volume 08, Issue 05 on March 2020.</td></tr>
<tr><td>Anu Paul, Biya Mariya Jacob & Fathima Sonu K Shukoor, published a paper on "Impact Study On Waste Dumpsite And Rehabilitation To Landfill" in International Research Journal of Engineering and Technology (IRJET), e-ISSN:2395-0056 p-ISSN:2395-0072,Volume 07, Issue 03 on March 2020</td></tr>
<tr><td>Daniel A.V, Aleena Pauly, Hajmina A A, Maria Joy & Mittu Kuriakose, published a paper on ”Static Analysis of Dome Structure” in Technology & Future, Volume VI Number I,ISSN 2454-4051,January-June 2019.</td></tr>
<tr><td>Soumya Rani P Thomas, Afshan Nizar, Dani George, Pranav Krishna, published a paper on "Quarry Dust for Strengthening Subgrade Soil" in International Research Journal of Engineering and Technology (IRJET) ,e-ISSN: 2395-0056,p-ISSN: 2395-0072,Volume: 07 ,Issue: 06 ,June 2020</td></tr>
<tr><td>Soumya Rani P Thomas, Govind S, Rens Siby, Roshan Shanavas, published a paper on "Interlocking tiles using pervious concrete" in International Research Journal of Engineering and Technology (IRJET),e-ISSN: 2395-0056,p-ISSN: 2395-0072,Volume: 07, Issue: 06 , June 2020</td></tr>
<tr><td>Rose Mary Xavier, Benila Raj, Kevin Joseph, Varsha Antony, Anto Paul, published paper on“ Flood Hazard Vulnerability Mapping of Ernakulam District Using GIS And Remote Sensing”, in International Journal of Creative Research Thoughts</td></tr>
<tr><td>Rose Mary Xavier, Amala Thomas, Anitta Thomas, Jaisil Jacob, Shalin K Shaji, published paper on “Application of GIS and RS in flood evacuation planning”: a case study of flood affected wards in Muvattupuzha municipality, in International Research Journal of Engineering and Technology (IRJET), Volume 7, Issue 5, May 2020 (https://irjet.net/volume7-issue5) S.No: 686</td></tr>
<tr><td>Ancy Genu C George, Pratheeksh Joshy, Ardra Raghavan, Athira Biju, published a paper on "Traffic Modification For Enhancing Safety in front of VJCET Campus", in International Journal of Creative Research Thoughts, Volume 8, Issue 4 April 2020</td></tr>
<tr><td>Ancy Genu C George, Pratheeksh Joshy, Ardra Raghavan, Athira Biju, published a paper on "Analysis and Solution of Traffic Congestion Problems in front of VJCET Campus’’ in International Journal for Research in Applied Science & Engineering Technology,Volume 8, Issue 3,March 2020</td></tr>
<tr><td>Ancy Genu C George, Abrin Samson, Angel Roy, Badusha Kani, Jesna Nicolas,have published a paper on "Study on Effect of NPK fertilizer and Cow Dung on Oil Contaminated Soil", in International Journal for Research in Applied Science & Engineering Technology,Volume 8, Issue 4, April 2020</td></tr>
<tr><td>Finu John, Abraham Reji, Annmary Vincent, Biby Biju, Soja Kuriakose,have published a paper on" Application of Value Engineering in Residential Building", in International Journal of Engineering Research & Technology(IJERT). Volume 9, Issue 4, May 2020 </td></tr>
<tr><td>Finu John, Avani Mohan, Paul Shaji , Rahul P,havepublished a paper on "Analysis of Construction Project Cost Overrun Using Statistical Method", in International Research Journal of Engineering and Technology(IRJET), Volume 7, Issue 6, June 2020 </td></tr>
<tr><td>Meril Jose, Adwaith B, Ajin John, Akash Venu, Deepak Narendran, published a paper on "Effect of Aspect Ratio on the Mechanical Properties of Steel Fibre Reinforced Concrete", in International Journal for Research in Applied Science & Engineering Technology (IJRASET).</td></tr>
<tr><td>Hinta Thampi, Adarsh Mathew, Ajeena Baby, Akash Jose, Neenu K George, published a paper on "Redesigning of existing commercial building as a net-zero energy building" in International Journal of Research and Technology(IRJET), Vol. 9 - Issue 04, April -2020, ISSN: 2278-0181.</td></tr>
<tr><td>Amel Austine, Dr. R. Suji Pramila, “A Review on Recent Research Directions in Device to Device Communication”, in proceedings of 3rd IEEE International Conference on Inventive Computation Technologies (ICICT) – 2018, Date of publication: 12 March 2020</td></tr>
<tr><td>Amel Austine, Dr. R. Suji Pramila, “Interference Management by Resource Exchange for D2D Communication in Cellular Network”, International Journal of Recent Technology and Engineering (IJRTE),Volume-8, Issue-5S, January 2020, DOI: 10.35940/ijrte.E1001.0285S20</td></tr>
<tr><td>Dr Anishin Raj M.M et al., published a paper on "A Hybrid Approach for Video Steganography by Streching the Secret Data",  Springer-Lecture Notes in Network and Systems, Vol 89, 1081-1089, ISSN: 2367-3370, (Indexed in SCOPUS)</td></tr>
<tr><td>Dr. Anishin Raj M.M et al., published a paper on "Leukocyte Sub Type Identification Using Spline Interpolation And Graphical Analysis", International Journal of Advanced Trends in Computer Science & Engineering, Vol 9, No 1.3, June 2020 (Indexed in SCOPUS)</td></tr>
<tr><td>Dr. Anishin Raj M.M et al., published a paper on "Various OCT Segmentation and Classification Techniques", in Proceedings of International Conference ICCIDT-15th and 16th June 2020</td></tr>
<tr><td>Dr Anishin Raj M.M et al., published a paper on "An Improved Method for LSB Based Image Steganography Technique using Collatz Conjecture Sequence", in International Journal of Advanced Trends in Computer Science & Engineering, ISSN 2278-3091 (Indexed in SCOPUS)</td></tr>
<tr><td>Dr Anishin Raj M.M et al., published a paper on "Unsupervised identification of Retinal diseases using CNN in OCT image data", Technology & Future (Jan-June 2020)</td></tr>
<tr><td>Dr Anishin Raj M.M et al., “Crop Suggestion Based On Soil Types”, in the proceedings of National conference on Security, Parallel Processing, Image Processing & Networking(SPIN 2020),VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Diana Baby, Soumya Mathew, Dr. Anishin Raj M.Met al., "A Performance Comparison of Supervised and Unsupervised Image Segmentation Methods", Springer Nature- Computer Science journal, ISSN:2661-8907 Jan 2020 (Indexed in ACM)</td></tr>
<tr><td>Silpa Josephet al., “Detection and Localization of Image and Video Tampering", International Journal of Innovative Technology and Exploring Engineering, vol.9 no. 4, pp. 1951–1956, February 2020</td></tr>
<tr><td>Silpa Josephet al., “Smart security: Liveness detection based user authentication system”, National conference on Security, Parallel Processing, Image Processing & Networking(SPIN 2020) conducted by Dept. of CSE,VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Sindhu Jose,et al., "A Survey on Smart Shopping", National conference on Security, Parallel Processing, Image Processing & Networking (SPIN 2020) conducted by Dept. o f CSE, VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Mili Els Jose,et al.,"Human Motion Detection", National conference on Security, Parallel Processing, Image Processing & Networking(SPIN 2020) conducted by Dept. of CSE,VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Mayadevi P.A et al., "Retrieving Profiles by Image Based Search", Technology& Future (Jan-June 2020)</td></tr>
<tr><td>Basil Baby, "A Multi Stage Path Indexed Energy Conserving Routing in MANET", International Journal of Innovative Technology and Exploring Engineering, ISSN: 2278-3075, Volume-9 Issue-2, December 2019</td></tr>
<tr><td>Ritty Jacob  "Real Time Vision Based Fingertip Detection Strategies", International Journal of Innovative Technology and Exploring Engineering, vol.9 no. 2, pp. 3532–3536, December 2020</td></tr>
<tr><td>Ritty Jacobet al., “Hand Writing Recognition of Medical Prescriptions”, National conference on Security, Parallel Processing, Image Processing & Networking(SPIN 2020) conducted by Dept.of CSE,VJCET on 17th and 18th June 2020</td></tr>
<tr><td>Neenu Daniel, A. Anitha, “A Study on Recent Trends in Face Spoofing Detection Techniques, published proceedings of 3rd IEEE International Conference on Inventive Computation Technologies (ICICT) - 2018. DOI: 10.1109/ICICT43934.2018.9034361., date Added to IEEE Xplore: 12 March 2020 , Scopus ID: 21100793693</td></tr>
<tr><td>Neenu Daniel, A. Anitha, “Detection of Face Spoofing using Color Texture and Edge Features”, International Journal of Recent Technology and Engineering (IJRTE),Volume-8, Issue-5S, January 2020.DOI: 10.35940/ijrte.E1008.0285S20, ISSN: ISSN: 2277-3878 Indexed By: Scopus 2018-2019, PageNo:33-37.</td></tr>
<tr><td>Andrews Jose,et al., "Secure Cloud Storage Framework With Visual Authentication and Blockchain", National conference on Security, Parallel Processing, Image Processing &Networking(SPIN 2020 conducted by Dept.o f CSE, VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Sabitha Raju et al., " Vision Based Traffic Accident Detection by sound and change in position of the vehicle", National conference on Security, Parallel Processing, Image Processing & Networking (SPIN 2020) conducted by Dept. of CSE,VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Sabitha Raju et al., “Augmented Reality Virtual Dressing System", National conference on Security, Parallel Processing, Image Processing & Networking (SPIN 2020) conducted by Dept.o f CSE, VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Rini Simon, “Iris Controlled Object Movement”, Proceedings of the International Colloquium organized by Mar Athanasius College of Engineering, March 2020</td></tr>
<tr><td>Arsha J K et al., "Signboard character recognition and product listing", National conference on Security, Parallel Processing, Image Processing & Networking (SPIN 2020) conducted by Dept.of CSE,VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Dona Jose,et al., "Fake Currency Detection using Neural Networks", National conference on Security, Parallel Processing, Image Processing & Networking (SPIN 2020) conducted by Dept. o f CSE, VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Dona Jose,et al., “Fake review detection using deep learning", National conference on Security, Parallel Processing, Image Processing & Networking(SPIN 2020) conducted by Dept. of CSE, VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Bency Cleetus et al., "Anti-phisher: A phishing link detection web application using machine learning techniques", National conference on Security, Parallel Processing, Image Processing & Networking(SPIN 2020) conducted by Dept. of CSE,VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Remya Paul et al., "Future price prediction and online platform for selling agriculture produces", National conference on Security, Parallel Processing, Image Processing & Networking(SPIN 2020) conducted by Dept. of CSE,VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Soumya Mathew, " A survey on various Extreme Learning Machines", In proceedings of ICCIDT-15th and 16th June 2020</td></tr>
<tr><td>Alphonsa Kuriakose et al., "VIZIYON: Assistive handheld device for visually challenged", Procedia Computer Science 171, 2486-2492</td></tr>
<tr><td>Alphonsa Kuriakose et al., "Cladron :AI assisted device for identifying artificially ripened climacteric fruits", Procedia Computer Science 171, 635-643</td></tr>
<tr><td>Nimmy George et al., "Automated billing cart using SSD based object detection", National conference on Security, Parallel Processing, Image Processing & Networking(SPIN 2020) conducted by Dept. of CSE,VJCET on 17th and 18th June 2020.</td></tr>
<tr><td>Cini K,presented paper in "Hybrid fuelled SI Engine –An approach to decrease the carbon emission of an SI engine” in National conference on Emerging trends in Power, Instrumentation Control and computing technologies from7th to 9th August 2019.</td></tr>
<tr><td>Cini Kpresented a paper in "Design and Implementation of Pure sine wave" in National conference on Emerging trends in Power, Instrumentation Control and computing technologies from 7th to 9th August 2019.</td></tr>
<tr><td>Smitha Jacob presented a paper in “Modernization of conventional railway system” in National conference on Emerging trends in Power, Instrumentation Control and computing technologies from 7th to 9th August 2019.</td></tr>
<tr><td>Mereya presented paper in “Design and Implementation of Driver Assistance System to Enhance Drive Safety’ in National conference on Emerging trends in power, instrumentation, control and computing technologies from 7th to 9th August 2019.</td></tr>
<tr><td>Mereya Babypresented paper in “Density Based Traffic Signal Control Using ARDUINO and IR Sensors” in National conference on Advancements in Control and Computing technologies in Electrical Engineering from 15th to16th July 2020</td></tr>
<tr><td>Jis Jose presented paper in “Voice controlled wheelchair” in National conference on Emerging trends in power, instrumentation, control and computing technologies from 7th to 9th August 2019.</td></tr>
<tr><td>Jis Jose presented paper in“Intruder detection and alert system using hydride doppler radar’ in National conference on Advancements in Control and Computing technologies in Electrical Engineering from 15th to16th July 2020</td></tr>
<tr><td>Neena Skaria,presented paper in “Solar powered Remote controlled Sewage cleaning machine” in National conference on Advancements in control and computing technologies from 15th -16th July 2020.</td></tr>
<tr><td>Neena Skaria, presented paper in “Smart Gas Cylinder” in National conference on Advancements in control and computing technologies from 15th -16th July 2020.</td></tr>
<tr><td>Neena Skaria, published a paper on “Agriculture robot for seeding function” in national conference on “emerging trends in power, instrumentation, control and computing technologies” from 7th to 9th august 2019.</td></tr>
<tr><td>Breeza Paulose,presented a paper in “Thermal Jacket using Flexible Heater” in National conference on Emerging trends in Power, Instrumentation Control and computing technologies from 7th to 9th August 2019.</td></tr>
<tr><td>Jane Maria S,presented paper in “Hybrid Energy Meter” in National Conference on   Advancements in Control & Computing Technologies from 15th to 16th July 2020.</td></tr>
<tr><td>Jomu M George,presented paper in “Data Collection and Monitoring of Power Supply Alternatives” in National Conference on Advancements in Control & Computing Technologies from 15th to 16th July 2020.</td></tr>
<tr><td>Jomu M George,presented paper in “Reintegrative and Antilock Braking System in Electric Vehicles” in National Conference on Emerging trends in Power, Instrumentation Control and computing technologies from 7th to 9th August 2019</td></tr>
<tr><td>Seena Paul,presented paper in “Smart & Intelligent Walking Stick for Blind” in National conference on Emerging trends in Power, Instrumentation, Control and computing technologies from 7 th to 9th august 2019.</td></tr>
<tr><td>Seena Paul,presented paper in “Intelligent Poultry Farm” in National conference on Advancements in Control & Computing Technologies from 15th to 16th July 2020</td></tr>
<tr><td>Naveen Jacob, Muralidhar Kulkarni, Krishnamoorthy K, published a paper on “An Electronically Switchable UWB to Narrow Band Antenna for Cognitive Radio Applications”, in Microwave and Optical Technology Letters, 2020, Vol.62, Issue 9, Pages: 2989-3001, wileyonlinelibrary.com/journal/mop, 2020 Wiley Periodicals.(Indexed in SCOPUS)</td></tr>
<tr><td>Naveen Jacob, Muralidhar Kulkarni, Krishnamoorthy K, published a paper on “Omega Shaped Complementary Split Ring Resonator Loaded Bandwidth Reconfigurable Antenna for Cognitive Radio Applications”, in Elsevier, Science Direct: Procedia Computer Science Journal, 2020, Vol: 171, Pages 1279–1285.(Indexed in SCOPUS)</td></tr>
<tr><td>D. Tony, V. P. Sarin, N. K. Pushkaran, K. J. Nelson, P. Mohanan, and K. Vasudevan, published a paper on "Artificial Dielectric Superstrate Loaded Antenna for Enhanced Radiation Performance," in Progress in Electro magnetics Research M, Vol. 85, 185-194, 2019.</td></tr>
<tr><td>Ranjini Surendran and Dr. Jude Hemanth, published a paper on “Scene Understanding Using Deep Neural Networks—Objects, Actions, and Events: A Review” in International Conference on Innovative Computing and Communications, Advances in Intelligent Systems and Computing, vol 1087. Springer, Singapore, 29 February 2020, DOI https://doi.org/10.1007/978-981-15-1286-5_19, Online ISBN978-981-15-1286-5</td></tr>
<tr><td>Ranjini Surendran and Dr. Jude Hemanth, presented a paper on “Deep Inside Feature Learning for Image Classification” in International Conference on Artificial Intelligence – 2019, (SLAAI-ICAI -2019), at Belihuloya, Sri Lanka on 12th December, 2019.  </td></tr>
<tr><td>Ms. Ranjini Surendran , Rhithu Shysu, Amrutha Mohan, Sajitha Saju, Arathy B Kurisinkal published a paper on “Flex Controlled Robotic Arm” in Journal of Control System and Control Instrumentation, Volume 5, Issue 3(2019) on November 6, 2019.( http://doi.org/10.5281/zenodo.3530464)</td></tr>
<tr><td>Femy John, Joshua Shaju , Melbin K Mathai , Melby Seby  published a paper on “Gesture Controlled Wheelchair” in Journal of Embedded Systems and Processing, Volume 4, Issue 3, November 2019</td></tr>
<tr><td>Vinijakurian,Alin Mathew, Della Paul, Dona Maria george, published a paper on “Robotic Arm Using Brain Computer Interface”, in Journal of Optical Communication Electronics of MAT Journals, Volume 5, Issue 3, Year 2019, December</td></tr>
<tr><td>Anju Susan Georgeet al.,published a paper on “Braille Converter”, Technology and Future, December 2019</td></tr>
<tr><td>Anju Susan Georgeet al.,published a paper on“Indoor Tracking”, Technology and Future, December 2019</td></tr>
<tr><td>Jesline Josephet al.,published a paper on “Blind Assisting System:” Proceedings of the International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, Mar Athanasius College of Engineering, Kothamangalam, (page No. 930-932)</td></tr>
<tr><td>Juliet. A. Muaraliet al.,published a paper in "An Enhanced Hierarchical Model For Cloud Computing Environments", International Conference on Advances in Computing, Communication, Embedded and Secure Systems- ACCESS’ 20, AdiShankara Institute of Engineering and Technology, Kalady, Kerala, May 28-30, 2020</td></tr>
<tr><td>Juliet. A. Muaraliet al.,published a paper on "Helmet Detection using Deep Learning", International colloquium on recent trends in engineering, Mar Athanasius College of Engineering, Kothamangalam, Kerala, 13-14 march 2020	</td></tr>
<tr><td>Annpreetha Joseet al.,published a paper on "Human Security system with location awareness": Proceedings of the International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, Mar Athanasius College Of Engineering, Kothamangalam,(page No.)</td></tr>
<tr><td>Ann Preetha Joseet al.,published a paper on "Text Summarizer" National Conference on Security, parallel processing, image processing and Networking-Spin 2020</td></tr>
<tr><td>Tiny Molly.Vet al.,published a paper on “Smart Trash Collector using IOT", Proceedings of the International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, Mar Athanasius College of Engineering, Kothamangalam, (page No.</td></tr>
<tr><td>Salini Dev. P.Vet al.,published a paper on "Secure Electronic Voting system using Block chain as a Service", National Conference on Security, parallel processing, image processing and Networking-Spin 2020</td></tr>
<tr><td>Salini Dev. P.V.et al.,published a paper on "Three level Security for ATM.", National Conference on Security, parallel processing, image processing and Networking-Spin 2020</td></tr>
<tr><td>Diana Babyet al.,published a paper on "Leukocyte Sub Type Identification using Spline Interpolation and Graphical Analysis", International Journal of Advanced Trends in Computer Science and Engineering, ISSN: 2661-8907, Vol 9, No.1.3, ISSN: 2278- 3091, July 2020, pp.310-315.(Indexed in SCOPUS)</td></tr>
<tr><td>Diana Babyet al.,published a paper on "A Performance Comparison of Supervised and Unsupervised Image Segmentation Methods" SPRINGER NATURE Computer Science Journal (INDEXED IN ACM Digital Library), ISSN: 2661-8907, Vol1, March 2020</td></tr>
<tr><td>Diana Babyet al.,published a paper on "American Sign Language Conversion using Deep Learning", In Proceedings of International Colloquium on recent trends in engineering, at MACE Kothamangalam, March 2020, pp.922-925</td></tr>
<tr><td>Dr. Sheela.V.Ket al.,, "Raven Shield- A Secured P2p File Sharing App ",  Presented a paper on National Conference on Security, parallel processing, image processing and Networking-Spin 2020</td></tr>
<tr><td>Dr. Shunmugesh K, published a paper on "Measurement of Tensile Properties and Hardness of Friction Stir Welded Aluminium Alloy AA1200 ", Materials Today Proceedings, Vol 24 2214-7853, Jan 2020(Scopus indexed)</td></tr>
<tr><td>Dr. Shunmugesh K, published a paper on “Areca fiber reinforced LLDPE Biocomposite”, Materials Today Proceedings, Vol 24and 2214-7854 Jan 2020 (Scopus indexed)</td></tr>
<tr><td>Dr. ShunmugeshK, published a paper on “Taguchi Grey Relational Analysis based Optimization of Micro-Drilling Parameters on Carbon Fiber Reinforced Plastics. , Materials Today Proceedings,Vol 24 and 2214-7855, Jan 2020 (Scopus indexed)</td></tr>
<tr><td>Dr. Shunmugesh K, published a paper on “Investigation on Crash Analysis of a Frontal Car Bumper”, Transactions of the Indian Institute of Metals, Vol 72(10) and 0972-2815, Jan2020      (SCI indexed)</td></tr>
<tr><td>Dr. Shunmugesh K, Mr.Arun RaphelOptimization of drilling parameters of fiber reinforced polymer composites,Technology & Future – Journal of Science &Technology, Volume 1 , 2019</td></tr>
<tr><td>Dr. SajanT. John, published a paper on “An Integrated Supply Chain Model for Export Commodities for Indian Container Goods”, European Transport Conference, Association for European Transport, Dublin Castle, Ireland, October 2019</td></tr>
<tr><td>Arun K, published a paper on “Fabrication of GFRP Composite and To Analyse Its Delamination Factor in Drilling Using Three Different Tool Geometries”, International Journal of Scientific & Technology Research (IJSTR) Volume 9 - Issue 4, April 2020 (Scopus indexed)</td></tr>
<tr><td>Eldhose Kurian, presented a paper on “Lifting Equipment for Load Lifting”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Eldhose Paul, presented a paper on “Prosthetic hand using linkage mechanism”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Eldhose Kurian, presented a paper on “Design of Nutmeg Cracker”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Lovin Varghese, presented a paper on “On road flood rescue vehicle”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Lovin Varghese, presented a paper on “Autonomous rescue and evacuation suit (ARES )”,  Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Lovin Varghese, presented a paper on “Integrated pedal powered grain milling and threshing machine”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Arun K.R, presented a paper on “Automatic Banana tree planter”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Arun K.R, presented a paper on “Bicycle operated water Filtration system”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Arun Raphelpublished a paper on "High entropy phenomena induced low thermal conductivity in BiSbTe1.5Se1.5 thermoelectric alloy through mechanical alloying and spark plasma sintering”,Materials Letters. 269 (2020), 127672 pp.1–4, March 2020 (SCI indexed)</td></tr>
<tr><td>Nibin B, presented a paper on “Robotic Assist for Walking Disability”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Nibin B, presented a paper on “Biodegradable Plastic”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>AbinPaul, presented a paper on “Semiautomatic power hammer”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>AbinPaul,presented a paper on "Experimental study of refrigeration cycle using diffuser pipe and application of nano particles”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Nidheesh K, presented a paper on “Biofuel Production from water Hyacinth”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Basil Baby,presented a paper on “Poultry Raking Agro Machine”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Akash Paul Savio, published a paper on “Automatic River Cleaning Machine”, International Journal of Engineering Sciences & Research Technology, Vol 9(5), ISSN: 2277-9655, May 2020</td></tr>
<tr><td>Akash Paul Savio,presented a paper on “Eco-Friendly Sewage Cleaning System”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Akash Paul Savio, presented a paper on “Automatic River Cleaning Machine”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Martin Jose, presented a paper on “Sustainable banana stem utility vehicle”, Proceedings of International Colloquium on Recent Trends in Engineering (IC@MACE)-2020, March 2020</td></tr>
<tr><td>Dr.Anishin Raj M.M et al.,"A novel image processing approach  for finding the bubble count  in neutron dosimeter",Disaster Advances ,01 October 2017, 0974-262X</td></tr>
<tr><td>Dr.Anishin Raj M.M et al.,"A combined approach of  steganography  with LSB encoding technique and  des algorithm",Proceedings of the 3rd  IEEE International  Conference on Advances  in Electrical and  Electronics, Information , Communication and  Bio-Informatics,  AEEICB 2017 ( SCOPUS Indexed),01 February 2017</td></tr>
<tr><td>Dr.Anishin Raj M.M et al.,"A hybrid technique for  quadrant based data hiding  using Huffman coding",ICIIECS 2015 - 2015 IEEE  International Conference  on Innovations in  Information, Embedded  and Communication  Systems (Web of Science/ SCOPUS  indexed),01 August 2015</td></tr>
<tr><td>Dr.Anishin Raj M.M et al.,"An approach of cryptography and  steganography using rotor cipher  for secure transmission",IEEE International  Conference on  Computational  Intelligence and  Computing Research,  ICCIC ( WoS/ Scopus  indexed),01 December 2015</td></tr>
<tr><td>Shibu K.R et al.,"Routing protocol based key management schemes in manet: A survey",International Journal of Engineering and Technology(UAE),01 January 2018,2227-524</td></tr>
<tr><td>Jobin Jose et al.,"A survey on last level cache partitioning  techniques in chip multi-processors",IJCTA(SCoupus),01 January 2016,231–243</td></tr>
<tr><td>Dr. Rajesh Cherian et al.,"Pixel and edge based illuminant color estimation for image forgery detection",Procedia Computer Science,01 December 2015,1877-0509</td></tr>
<tr><td>Dr. Sinnu Susan Thomas et al.,"Perceptual Video Summarization-A New Framework for Video Summarization",IEEE Transactions on Circuits and Systems for Video Technology,01 August 2017,1558-2205</td></tr>
<tr><td>Dr. Sinnu Susan Thomas et al.,"Perceptual synoptic view-based video retrieval using metadata",Signal, Image and Video Processing,,01 March 2017,1863-1711</td></tr>
<tr><td>Dr. Simi Zerine Sleeba et al.,"Energy-efficient fault tolerant technique for deflection routers in two-dimensional mesh Network-on-Chips",IET Computers and Digital Techniques,01 May 2018,1751-8601</td></tr>
<tr><td>Dr. Simi Zerine Sleeba et al.,"An enhanced model for reliable deflection routing in mesh network on chip",International Journal of High Performance Systems Architecture,01 January 2017,1751-6536 </td></tr>
<tr><td>Dr. K.K.Rajan et al.,"Leak Experiments in LEENA Facility with  modified  Leak Detector Layout   Large   Pipelines",Annals of Nuclear Energy,01 May 2017,0306-4549</td></tr>
<tr><td>Dr. K.K.Rajan et al.,"Hydraulic characteristics of a fast reactor fuel subassembly: An experimental investigation",Annals of Nuclear Energy,02 May 2017,0306-4549</td></tr>
<tr><td>Dr. K.K.Rajan et al.,"Evaluation of hydraulic characteristics of Core Flow Monitoring Mechanism for PFBR",Annals of Nuclear Energy,01 March 2017,0306-4549</td></tr>
<tr><td>Dr. K.K.Rajan et al.,"Transport phenomena in the electrodeionization of cesium from AMP-PAN",Separation Science and Technology (Philadelphia),01 April 2017,0149-6395</td></tr>
<tr><td>Dr. K.K.Rajan et al.,"Defluoridation of water by chemical impregnated Artocarpus hirsutus sawdust",Water Science and Technology: Water Supply,01 October 2016,1607-0798</td></tr>
<tr><td>Dr. K.K.Rajan et al.,"Ultrasonic technique for vibration measurements on PFBR fuel subassemblies",Journal of Vibration Engineering and Technologies,01 October 2016, 2523-3939 </td></tr>
<tr><td>Dr. K.K.Rajan et al.,"Experimental studies on acoustic leak detection in steam generators of Fast Breeder Reactor",Journal of Maintenance Engineering,01 August 2016,1355-2511</td></tr>
<tr><td>Dr. K.K.Rajan et al.,"Design and performance evaluation of Core flow monitoring mechanisms for PFBR",Annals of Nuclear Energy,02 August 2016,0306-4549</td></tr>
<tr><td>Dr. K.K.Rajan et al.,"Numerical simulation of Miniature Mutual inductance type leak detector for FBTR",IETE Technical Review,01 December 2016,0256-4602</td></tr>
<tr><td>Dr. K.K.Rajan et al.,"Optimization of thermal baffle for liquid metal injection nozzle",International of Journal of Nuclear Energy science and technology,01 June 2016,1741-6361</td></tr>
<tr><td>Dr. K.K.Rajan et al.,"Porous Body Model Based Parametric Study for Sodium to Air Heat Exchanger used in Fast Reactors",Journal of Thermal Science and Engineering Applications,01 March 2016,1948-5093</td></tr>
<tr><td>Aruna B et al.,"Modified N-P interpolation theory for closed loop pole placement",Asian Journal of Control,Septemebr 2015, 1561-8625</td></tr>
<tr><td>Aruna B et al.,"Necessary and sufficient condition for modified Nevanlinna-Pick interpolation for closed-loop pole placement",Control Theory and Technology,Septemebr 2017, 20956983, 21980942</td></tr>
<tr><td>Dr. Sheela.V.K et al.,"“Brain tumour Detection based on FFT , Curve analysis , k-space and Neural network classifier",International Journal of Signal and Imaging Systems Engineering,08 July 2018,1748-0701 </td></tr>
<tr><td>ArunRaphel et al.,"Oxidation and Corrosion resistance of AlCoCrFeTi High Entropy Alloy ,", Materials Today Proceedings 4 ,195-202,01 April 2017,2214-7853</td></tr>
<tr><td>ArunRaphel et al.,"To Study the Cooling Rate and Influence of Boron Carbide on Mechanical Properties of Aluminium LM13 Matrix B4C Reinforced Composites ",Materials Today: Proceedings 4,7202-7207,11 July 2017,2214-7853</td></tr>
<tr><td>Sajan T John et al.,"Multi-period reverse logistics network design for used refrigerators",Applied Mathematical Modelling, Vol. 54, 311-331,01 February 2018,0307-904</td></tr>
<tr><td>Sajan T John et al.,"Reverse logistics network design: a case of mobile phones and digital cameras",International Journal of Advanced Manufacturing Technology,01 January 2018,1433-3015</td></tr>
<tr><td>Sajan T John et al.,"Multi-period reverse logistics network design with emission cost",International Journal of Logistics Management,01 February 2017, 0957-4093</td></tr>
<tr><td>Sajan T John et al.,"Effect of grading of product return on the network design of a reverse supply chain: A comparative study",International Journal of Applied Management Science,07 July 1905,1755-8921</td></tr>
<tr><td>Sajan T John et al.,"Modelling and analysis of network design for a reverse supply chain",Journal of Manufacturing Technology Management,01 July 2015, 1741-038</td></tr>
<tr><td>Vinoj K et al.,"To Study the Cooling Rate and Influence of Boron Carbide on Mechanical Properties of Aluminium LM13 Matrix B4C Reinforced Composites",Materials Today: Proceedings 4 , 7202-7207,01 October 2017, 2214-7853</td></tr>
<tr><td>Vinoj K et al.,"Influence of heat Treatment and aging process on LM13 Aluminium Alloy Cast Sections: An Experimental Study",Materials Today: Proceedings 4 , 7202-7208,02 October 2017, 2214-7853</td></tr>
<tr><td>Vinoj K et al.,"Friction Stir Welding on Dissimilar Alloys - A Critical Review",International Journal of Mechanical Engineering and Technology,01 February 2019, 0976-6359</td></tr>
<tr><td>Nibin B et al.,"Thermodynamic Analysis of an integrated Gas Turbine Powerplant utilising cold exergy of LNG",Journal of Mechanical Engineering and Sciences,01 September 2018,2289-4656</td></tr>
<tr><td>K. Shunmugesh et al.,"Influence of heat treatment and aging process on LM13 Aluminium Alloy Cast Sections: An Experimental Study",Materials Today: Proceedings (Elsevier),01 October 2017, 2214-7853</td></tr>
<tr><td>K. Shunmugesh et al.,"Optimization of Drilling Characteristics using Grey-Fuzzy logic in Glass Fiber Reinforced Polymer (GFRP)",Materials Today: Proceedings (Elsevier),01 October 2017, 2214-7853</td></tr>
<tr><td>K. Shunmugesh et al.,"Optimization of Drilling Process Parameters Via Taguchi, TOPSIS and RSA Techniques",Archives of Metallurgy and Materials,2017 Sept, 1733-3490</td></tr>
<tr><td>K. Shunmugesh et al.,"Optimization of machining force and delamination factor of GFRP in dry drilling process using taguchi method.",Advances in Natural and Applied Sciences,01 June 2017, 1995-0772</td></tr>
<tr><td>K. Shunmugesh et al.,"Multi-performance Optimization of Drilling Carbon Fiber Reinforced Polymer Using Taguchi: Membership Function",Transactions of the Indian Institute of Metals.,01 July 2018,0975-1645</td></tr>
<tr><td>Dr. Lovely Mathew P. et al.,"Carbon Nanotubes: An Ideal Candidate for Biomedical Applications",JSM Nanotechnology & Nanomedicine,01 June 2018, 2334-1815</td></tr>
<tr><td>Dr. Lovely Mathew P. et al.,"Quantum Dots: A Promising Tool for Biomedical application",JSM Nanotechnology & Nanomedicine,01 June 2018,2334-1815</td></tr>
<tr><td>Dr. Lovely Mathew P. et al.,"Tuning of microstructure in engineered poly (trimethylene terephthalate) based blends with nano inclusion as multifunctional additive",Polymer Testing,01 April 2018,0142-9418</td></tr>
<tr><td>Dr. K N Ramachandran Nair et al.,"Detecting video shot boundaries by modified tomography",ACM International Conference Proceeding Series,sept 2016</td></tr>
<tr><td>Jobin Jose et al.,"Implementation of algorithms for  L(2,1)-coloring problems",8th International Conference on Computing , Communications and Networking Technologies,  ICCCNT,09 July 1905</td></tr>
<tr><td>Dr. K N Ramachandran Nair et al.,"An Algorithmic Approach for General Video Summarization",Proceedings - 2015 5th International Conference on Advances in Computing and Communications,,Sept 2015</td></tr>
<tr><td>Dr. Sinnu Susan Thomas et al.,"Design of smart video surveillance system for indoor and outdoor scenes",International Conference on Digital Signal Processing, DSP,01 November 2017</td></tr>
<tr><td>Dr. Sinnu Susan Thomas et al.,"Smart surveillance based on video summarization",TENSYMP 2017 - IEEE International Symposium on Technologies for Smart Cities,01 October 2017</td></tr>
<tr><td>Naveen Jacob et al.," A Compact Frequency Reconfigurable Antenna for Cognitive Radio Applications",Proceedings of  International Engineering Symposium (IES-2019), Kumamoto University, Japan,19 March 2020</td></tr>
<tr><td>Naveen Jacob et al.," Application of Distributed Arithmetic in Image and  ECG Signal Processing",Proceedings of IEEE International Conference on Current  Trends in Computer, Electrical, Electronics and Communication (CTCEEC),18 September 2020</td></tr>
<tr><td>Naveen Jacob et al.," A Low Power Content Addressable Memory with  Self-Control Mechanism and Segmented Matchlines",Proceedings of IEEE  International Conference on Energy, Communication, Data Analytics and Soft  Computing (ICECDS),18 June 2020</td></tr>
<tr><td>Dr. K.K.Rajan  et al.,"Numerical simulation and experimental validation of future FBR surge tank hydraulics",Lecture Notes in Mechanical Engineering,sept 2017</td></tr>
<tr><td>Dr. K.K Rajan et al.,"A Review of Recent Advancements in Nuclear Power Generation",,   International Conference on Control, Power, Communication and Computing Technologies,01 December 2018</td></tr>
<tr><td>Sony Kurian et al.,"Composite pricing strategy for energy storage in wind electric generation", 2015 IEEE PES Asia-Pacific Power and Energy Engineering Conference (APPEEC), Brisbane, Australia,01 November 2015</td></tr>
<tr><td>Neena M Joseph et al.,"Operating speed of different classes of vehicles at summit vertical curves on two-lane non-urban roads",Emerging Trends in Engineering, Science and Technology for Society, Energy and Environment,01 August 2018</td></tr>
<tr><td>Anitha Rajan et al.,"Grammar worksheets",Enhance your English,01 September 2017</td></tr>


</table>
               
                {this.state.showMenu ? (
                    <MenuOverlay closeMenuFunction={this.closeMenu} />
                ) : (
                        ""
                    )}
            </div>
        );
    }
}

export default Reserch;