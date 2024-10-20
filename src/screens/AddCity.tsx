import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "../commonComponents/Header";
import Colors from "../constants/ColorConst";
import { debounce } from "lodash";
import { appApi } from "../utils/appApi";
import Spinner from "../commonComponents/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { locationActions } from "../store/location/locationActions";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ParamListBase } from "@react-navigation/native";

type AddCityScreenNavigationProp = StackNavigationProp<
  ParamListBase,
  "AddCity"
>;

type Props = {
  navigation: AddCityScreenNavigationProp;
};

const AddCity: React.FC<Props> = ({ navigation }) => {
  const dispatch: AppDispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>("");
  const [cityList, setCityList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { loading } = useSelector((state: RootState) => state.location);

  const onGetCities = (value: string) => {
    setIsLoading(true);
    appApi.getGeoCities(value).then((data: any) => {
      setIsLoading(false);
      if (data?.status === 200) {
        const cityResults = data?.data?.features?.map((feature: any) => ({
          name: feature.properties.formatted,
          lat: feature.properties.lat,
          lon: feature.properties.lon,
        }));
        setCityList(cityResults);
      } else {
        setCityList([]);
      }
    });
  };

  const debouncedChangeSearch = useCallback(debounce(onGetCities, 500), []);

  const onChangeSearch = (value: string) => {
    setSearchValue(value);
    debouncedChangeSearch(value);
  };

  const onSelectCity = (item: any) => {
    const latLngPayload = {
      lat: item.lat,
      lon: item.lon,
    };
    dispatch(locationActions.getCityData(latLngPayload)).then((data) => {
      navigation.navigate("Cities");
    });
  };

  return (
    <SafeAreaProvider style={styles.safeArea}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <View style={styles.headerWrapper}>
            <Header
              headerLabel={"Add City"}
              backBtn={true}
              backBtnPress={() => navigation.goBack()}
              addBtn={false}
            />
          </View>
          <View style={styles.innerWrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              value={searchValue}
              onChangeText={onChangeSearch}
            />
            <View style={styles.bodyWrapper}>
              {isLoading ? (
                <Text>Searching</Text>
              ) : (
                <View style={styles.dataWrapper}>
                  <FlatList
                    data={cityList}
                    renderItem={({ item }) => (
                      <Pressable
                        onPress={() => onSelectCity(item)}
                        style={styles.btnStyle}
                      >
                        <Text style={{ fontSize: 20 }}>{item.name}</Text>
                      </Pressable>
                    )}
                    keyExtractor={(item) => item.name}
                  />
                </View>
              )}
            </View>
          </View>
        </>
      )}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.greenColor,
  },
  headerWrapper: {
    paddingHorizontal: 20,
  },
  innerWrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
    padding: 20,
  },
  searchInput: {
    height: 50,
    borderColor: Colors.grayColor,
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  bodyWrapper: { justifyContent: "center", alignItems: "center", flex: 1 },
  dataWrapper: {
    borderWidth: 1,
    borderColor: Colors.grayColor,
    flex: 1,
    width: "100%",
    borderRadius: 10,
  },
  btnStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: Colors.grayColor,
    borderBottomWidth: 1,
    padding: 10,
  },
});

export { AddCity };
