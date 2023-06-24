import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation";

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};
