import { useColorScheme } from "react-native";

const colorScheme = useColorScheme();

export const darkScheme = {
    color: colorScheme === 'dark' ? '#fff' : '#000'
}
export const darkSchemeBack = {
    backgroundColor: colorScheme === 'dark' ? '#fff' : '#000'
}