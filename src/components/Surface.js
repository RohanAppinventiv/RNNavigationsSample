import { View } from "react-native"


export const RowSurface = ({children, style}) => {
  return (<View style={[{flex: 1, flexDirection: 'row', backgroundColor: 'F6F8FA'}, style]}>
    {children}
  </View>)
}

export const ColumnSurface = ({children, style}) => {
    return (<View style={[{flex: 1, flexDirection: 'column', backgroundColor: "#F6F8FA"}, style]}>
      {children}
    </View>)
  }


  export const Row = ({children, style}) => {
    return (<View style={[{flex: 1, flexDirection: 'row'}, style]}>
      {children}
    </View>)
  }
  
  export const Column = ({children, style}) => {
      return (<View style={[{flex: 1, flexDirection: 'column'}, style]}>
        {children}
      </View>)
    }