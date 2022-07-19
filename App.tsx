import NavigationRoutes from "./src/routes/NavigationRoutes"
import registerNNPushToken from 'native-notify';

export default function App(){
  registerNNPushToken(3243, 'jwIsCLG2Dx36OiuQS3KfAd');
  return <NavigationRoutes/>
}