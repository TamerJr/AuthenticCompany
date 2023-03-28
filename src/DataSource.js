const data = [
  {
    img: "https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Time Managment",
    status: "Coming Soon",
    roundNumber: "25",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "8 weeks",
  },
  {
    img: "https://images.pexels.com/photos/4855378/pexels-photo-4855378.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Self Develpoment",
    status: "Open",
    roundNumber: "22",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "12 weeks",
  },
  {
    img: "https://images.pexels.com/photos/4100644/pexels-photo-4100644.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Mental Health",
    status: "Open",
    roundNumber: "14",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "9 weeks",
  },
  {
    img: "https://images.pexels.com/photos/8134161/pexels-photo-8134161.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "LeaderShip Ethics",
    status: "Open",
    roundNumber: "12",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "21 weeks",
  },
  {
    img: "https://images.pexels.com/photos/8296981/pexels-photo-8296981.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Career Couching",
    status: "Coming Soon",
    roundNumber: "21",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "17 weeks",
  },
  {
    img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Team Managing",
    status: "Open",
    roundNumber: "18",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "15 weeks",
  },
  {
    img: "https://images.pexels.com/photos/7413997/pexels-photo-7413997.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Team Training",
    status: "Coming Soon",
    roundNumber: "5",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "11 weeks",
  },
  {
    img: "https://images.pexels.com/photos/7551728/pexels-photo-7551728.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Team Ethics",
    status: "Open",
    roundNumber: "9",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "10 weeks",
  },
  {
    img: "https://images.pexels.com/photos/7413909/pexels-photo-7413909.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Presentation Skills",
    status: "Open",
    roundNumber: "17",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "18 weeks",
  },
  {
    img: "https://images.pexels.com/photos/7414213/pexels-photo-7414213.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Public Speaking",
    status: "Open",
    roundNumber: "12",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "14 weeks",
  },
  {
    img: "https://images.pexels.com/photos/8297445/pexels-photo-8297445.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Meetings Quality",
    status: "Coming Soon",
    roundNumber: "15",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "16 weeks",
  },
  {
    img: "https://images.pexels.com/photos/8528604/pexels-photo-8528604.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "HR Ethics",
    status: "Open",
    roundNumber: "22",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "13 weeks",
  },
  {
    img: "https://images.pexels.com/photos/4939645/pexels-photo-4939645.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Grit",
    status: "Open",
    roundNumber: "4",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "21 weeks",
  },
  {
    img: "https://images.pexels.com/photos/5053732/pexels-photo-5053732.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Growth Mindset",
    status: "Open",
    roundNumber: "8",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "8 weeks",
  },
  {
    img: "https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Self Control",
    status: "Coming Soon",
    roundNumber: "11",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "22 weeks",
  },
  {
    img: "https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Money Planning",
    status: "Open",
    roundNumber: "28",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "19 weeks",
  },
  {
    img: "https://images.pexels.com/photos/8190808/pexels-photo-8190808.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Soft Skills",
    status: "Coming Soon",
    roundNumber: "20",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "17 weeks",
  },
  {
    img: "https://media.istockphoto.com/id/1217026295/photo/close-up-man-hand-arranging-wood-block-stacking-as-step-stair-on-paper-pink-background.jpg?s=612x612&w=0&k=20&c=xCuSucCW8x7MfdTruHL3YIqIGk6WetxOBxWpvE49r0E=",
    title: "Company Development",
    status: "Open",
    roundNumber: "19",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "21 weeks",
  },
  {
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Meeting Needs",
    status: "Coming Soon",
    roundNumber: "14",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "14 weeks",
  },
  {
    img: "https://media.istockphoto.com/id/1162297462/photo/business-process-and-workflow-concept.jpg?b=1&s=612x612&w=0&k=20&c=mLBlR7JFMeh2v2z4fKxbxFEJVJ3S3RetQM-XEeTCpbM=",
    title: "Company WorkFlow",
    status: "Open",
    roundNumber: "12",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "17 weeks",
  },
  {
    img: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Employee SkillUp",
    status: "Open",
    roundNumber: "16",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "12 weeks",
  },
  {
    img: "https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Positive Reading",
    status: "Coming Soon",
    roundNumber: "15",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: " weeks",
  },
  {
    img: "https://images.pexels.com/photos/7129700/pexels-photo-7129700.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Technical Writing",
    status: "Coming Soon",
    roundNumber: "13",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "21 weeks",
  },
  {
    img: "https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Google Search",
    status: "Open",
    roundNumber: "9",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet?",
    duration: "4 weeks",
  },
];

export default data;
