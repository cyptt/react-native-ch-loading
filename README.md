# react-native-ch-loading
react-native loading
### 集成说明
npm install react-native-ch-loading@lastversion
yarn add react-native-ch-loading@lastversion

### 参数说明
```
static propTypes={
      loadColor:PropTypes.string,     //load颜色
      loadBgColor:PropTypes.string,  //背景颜色
      textColor:PropTypes.string,     //字体颜色
      textSize:PropTypes.int   ,       //字体大小
      indicatorSize:PropTypes.string  ,  //指导样式   'small' 或'large'
      position:PropTypes.string   ,     //位置 top center bottom
      offSetCenter:PropTypes.int       //偏移中心的位置  +向下 - 向上
  }
```
### 使用说明

```
import CHLoading,{Loading} from 'react-native-ch-loading'

export  default class App extends React.Component{

    btnClick(){


      Loading.show()
      Loading.setOffSetCenter(0) //设置偏移量
      setTimeout(function () {
          Loading.hide()
      },2000)
  }
  render(){
      return (
          <>
              <TouchableOpacity
                  style={{width:100,height:100,backgroundColor:'#ff0'}}
                  onPress={()=>this.btnClick()}
              >

              </TouchableOpacity>

              <CHLoading loadBgColor={'#f00'}
                         loadColor={'#ff0'}
                         textColor={'#00f'}
                         ref={loading=>global.gLoading=loading}
                         textSize={15}
                         indicatorSize={'small'}
              />
          </>
      )
  }
};

```

