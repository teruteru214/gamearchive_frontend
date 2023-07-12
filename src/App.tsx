import AppProvider from "providers/app";
import AppRoutes from "routes";

const App = () => {
  // useEffect(() => {
  //   const fetchUnplayedGames = async () => {
  //     const res = await axios.get(`${endpoint}/management/status/unplayed`);
  //     console.log(res.data);
  //   };

  //   const fetchPlayingGames = async () => {
  //     const res = await axios.get(`${endpoint}/management/status/playing`);
  //     console.log(res.data);
  //   };

  //   const fetchClearedGames = async () => {
  //     const res = await axios.get(`${endpoint}/management/status/clear`);
  //     console.log(res.data);
  //   };

  //   fetchUnplayedGames();
  //   fetchPlayingGames();
  //   fetchClearedGames();
  // }, []);

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
