const initState = {
  projects: [
    { id: '1', title: 'Design app with Figma', content: 'blablablablal' },
    {
      id: '2',
      title: 'Setting up project on Github',
      content: 'blablablablal',
    },
    {
      id: '3',
      title: 'Initial project setup with create react app',
      content: 'blablablablal',
    },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
