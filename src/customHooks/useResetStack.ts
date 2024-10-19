import { useNavigation, CommonActions } from "@react-navigation/native";

const useResetStack = () => {
  const navigation = useNavigation();

  const resetStack = (screenName: string) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: screenName }],
      })
    );
  };

  return { resetStack };
};

export default useResetStack;
