
import React, {Component} from 'react';
import {

    View,
    Modal,
    Text,
    ActivityIndicator,

} from 'react-native';
import PropTypes from 'prop-types'
let loading;
export default {

    /**
     * 显示loading  string
     */
    show:function(showMSG){
        loading.show(showMSG)
        return this
    },
    /**
     * 设置偏移中心的位置
     * @param distance  int
     */
    setOffSetCenter:function(distance){

        loading.setOffSetCenter(distance)
        return this
    },

    /**
     * 设置loading 颜色
     * @param colorString
     * @returns {default}
     */
    setLoadColor:function (colorString) {

        loading.setLoadColor(colorString)
        return this
    },
    /**
     * 设置字体颜色
     * @param colorString
     * @returns {default}
     */
    setTextColor:function(colorString){
        loading.setTextColor(colorString)
        return this
    },
    /**
     * 设置字体大小
     * @param size
     * @returns {default}
     */
    setTextSize:function(size){

        loading.setTextSize(size)
        return this
    },
    /**
     * 设置背景颜色
     * @param colorString
     * @returns {*}
     */
    setBgColor:function(colorString){

        loading.setBgColor(colorString)
        return this
    },
    /**
     *
     * @param size enum('small', 'large')
     */
    setIndicatorSize:function(sizeString){
        loading.setIndicatorSize(sizeString)
        return this
    },

    /**
     * 隐藏loading
     */
    hide:()=>{
        loading.hide()
    }
}

export  class CHLoading extends React.Component{

    static propTypes={
        loadColor:PropTypes.string,     //load颜色
        loadBgColor:PropTypes.string,  //背景颜色
        textColor:PropTypes.string,     //字体颜色
        textSize:PropTypes.int   ,       //字体大小
        indicatorSize:PropTypes.string  ,  //指导样式   'small' 或'large'
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


    /**
     * 显示loading
     * @param showContent
     */

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

    /**
     * 设置loading颜色
     * @param colorString
     */
    setLoadColor(colorString){

        this.setState({
            loadColor: colorString
        })
    }

    /**
     * 设置字体颜色
     * @param colorString
     */
    setTextColor(colorString){
        this.setState({
            textColor:colorString
        })
    }

    /**
     * 设置字体大小
     * @param size
     */
    setTextSize(size){

        this.setState({
            textSize:size
        })
    }

    /**
     * 设置背景颜色
     * @param colorString
     */
    setBgColor(colorString){
        this.setState({
            loadBgColor:colorString
        })
    }

    /**
     * 设置load大小 samll
     * @param sizeString
     */
    setIndicatorSize(sizeString){
        this.setState({
            indicatorSize:sizeString
        })
    }

    /**
     * 隐藏hide
     */
    hide(){
        this.setState({
            isShow:false,
            showContent:'加载中...',
            offSetCenter:0,
            loadBgColor:'rgb(204,204,205)' ,
            loadColor:'#rgb(80,80,80)',
            textColor:'#000',
            textSize:15,
            indicatorSize:'small'
        })
    }


    /**
     * 点击空白隐藏视图
     */
    clickBlank(){

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

                            <View style={{marginLeft:GetCharLength(this.state.showContent)>4?20:30,marginRight:GetCharLength(this.state.showContent)>4?20:30}}>
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


/**
 * 查看字节长度
 * @param str
 * @returns {number}
 * @constructor
 */
function GetCharLength(str){
    var iLength = 0;  //记录字符的字节数
    for(var i = 0;i<str.length;i++){//遍历字符串中的每个字符
        if(str.charCodeAt(i) >255){   //如果当前字符的编码大于255
            iLength += 2;    //所占字节数加2
        }else{
            iLength += 1;   //否则所占字节数加1
        }
    }

    return iLength;   //返回字符所占字节数
}
