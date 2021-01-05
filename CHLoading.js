
import React, {Component} from 'react';
import {

    View,
    Modal,
    Text,
    ActivityIndicator,

} from 'react-native';
import PropTypes from 'prop-types'
let loading;
export class Loading {

    /**
     * 显示loading
     */
    static show(showContent){

        console.log("-----show1--",showContent)
        console.log("-----loading----",loading);
        loading.show(showContent)
    }

    /**
     * 隐藏loading
     */
    static hide(){
        loading.hide();
    }

    /**
     * 设置偏移中心的位置
     * @param distance
     */
    static setOffSetCenter(distance){
        loading.setOffSetCenter(distance)
    }
}
export  class CHLoading extends React.Component{

    static propTypes={
        loadColor:PropTypes.string,     //load颜色
        loadBgColor:PropTypes.string,  //背景颜色
        textColor:PropTypes.string,     //字体颜色
        textSize:PropTypes.int   ,       //字体大小
        indicatorSize:PropTypes.string  ,  //指导样式   'small' 或'large'
        position:PropTypes.string   ,     //位置 top center bottom
        offSetCenter:PropTypes.int       //偏移中心的位置  +向下 - 向上
    }
    constructor(props) {
        super(props);
        this.state = {
            showContent: "加载中...",    //显示字段
            isShow:false,              //是否显示
            loadColor:this.props.loadColor?this.props.loadColor:'#rgb(80,80,80)',
            loadBgColor:this.props.loadBgColor?this.props.loadBgColor:'rgb(204,204,205)' ,
            textColor:this.props.textColor?this.props.textColor:'#000',
            textSize:this.props.textSize?this.props.textSize:15,
            indicatorSize:this.props.indicatorSize?this.props.indicatorSize:'small' ,//small large
            offSetCenter:this.props.offSetCenter?this.props.offSetCenter:0

        };
        loading =this;

    }


    show(showContent){


        this.setState({
            isShow:true,
            showContent:showContent?showContent:this.state.showContent
        })
    }


    /**
     * 偏移中心微信
     * @param distance
     */
    setOffSetCenter(distance) {
        this.setState({
            offSetCenter:distance?distance:0,
        })
    }

    hide(){


        this.setState({
            isShow:false,
            showContent:'加载中...',
            offSetCenter:0
        })
    }


    clickBlank(){
        console.log("--------clickBlank----")

        this.hide()
    }
    componentWillUnmount() {
        clearTimeout(this.handle);
    }



    render() {
        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.state.isShow}
                hardwareAccelerated={true}
                statusBarTranslucent={true}
             >

                <View style={{
                    width:'100%',
                    height:'100%',
                    backgroundColor:'rgba(0,0,0,0.4)',
                    alignItems:'center',
                    justifyContent:'center',
                }}>

                    <View style={{
                        alignItems:'center',
                        backgroundColor:this.state.loadBgColor,
                        borderRadius:3,
                        marginLeft:20,
                        marginRight:20,
                        marginTop:this.state.offSetCenter

                    }}
                    >
                        <View >

                            <View style={{height:20}}></View>
                            <ActivityIndicator size={this.state.indicatorSize} color={this.state.loadColor}></ActivityIndicator>

                            <View style={{marginLeft:20,marginRight:20}}>
                                <Text style={{marginTop:5}}>
                                    <Text
                                        style={{color:this.state.textColor,fontSize:this.state.textSize}}
                                        numberOfLines={1000}
                                    >{this.state.showContent}
                                    </Text>

                                </Text>
                            </View>


                            <View style={{height:20}}></View>
                        </View>


                    </View>


                </View>




            </Modal>
        );
    }
}
