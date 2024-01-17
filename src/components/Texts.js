import { Text } from "react-native";


export const H1 = ({children, style}) => <Text style={[ {
    fontSize: 34,
    fontWeight: '800',
    color: '#373737'
   }, style]}>
    {children}
    </Text>


export const H2 = ({children, style}) => <Text style={[ {
    fontSize: 28,
    fontWeight: '800',
    color: '#373737'
   }, style]}>
    {children}
    </Text>

export const H3 = ({children, style}) => <Text style={[ {
    fontSize: 24,
    fontWeight: '600',
    color: '#373737'
   }, style]}>
    {children}
    </Text>

export const H4 = ({children, style}) => <Text style={[ {
    fontSize: 18,
    fontWeight: '600',
    color: '#373737'
   }, style]}>
    {children}
    </Text>

export const H5 = ({children, style}) => <Text style={[ {
    fontSize: 16,
    fontWeight: '600',
    color: '#373737'
   }, style]}>
    {children}
    </Text>

export const H6 = ({children, style}) => <Text style={[ {
    fontSize: 14,
    fontWeight: '600',
    color: '#373737'
   }, style]}>
    {children}
    </Text>

