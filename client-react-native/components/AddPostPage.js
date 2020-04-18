import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableNativeFeedback, TouchableOpacity, TextInput ,CameraRoll, FlatList, Button } from 'react-native';
import { Icon, Card, Header } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

const AddPostPage = (props) =>{
  let [selectedImages, setSelectedImages] = React.useState([]);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImages(selectedImages.concat([{ localUri: pickerResult.uri }]));
    console.log('Selected images',selectedImages);
  }
  function renderImageView(){
    return selectedImages.map((imageObj)=>{
      return <Image source={{ uri: imageObj.localUri }} style={{ width: 200, height: 200, margin: 10 }} key={imageObj.localUri}/>
    })
  }
  return(
      <ScrollView>
            <View style={styles.flexRow}>
                <View style={[styles.p15,styles.textCenter]}>
                  <Icon
                    name='arrow-left'
                    type='feather'
                    color='#000000' />
                </View>
                <View style={[styles.p15]}>
                  <Text>New Post</Text>
                </View>
                <View style={[styles.p15,styles.textCenter, styles.mlAuto]}>
                  <TouchableNativeFeedback>
                    <Text style={[styles.colorBlue]}>Share</Text>
                  </TouchableNativeFeedback>
                </View>
            </View>
            <View style={[styles.p15]}>
              <View style={[styles.flexRow, styles.bbGray, styles.pv10]}>
                <View style={[styles.mr10, styles.pt3]}>
                  <Text>Caption</Text>
                </View>
                <View>
                  <TextInput
                    placeholder="Write a caption"
                    multiline={true}
                  />
                </View>
              </View>
              <View style={[styles.flexRow, styles.bbGray, styles.pv10]}>
                <View style={[styles.mr10, styles.pt3]}>
                  <Text>Tag People</Text>
                </View>
                <View>
                  <TextInput
                    placeholder="Write a caption"
                    multiline={true}
                  />
                </View>
              </View>
              <View style={[styles.flexRow, styles.bbGray, styles.pv10]}>
                <View style={[styles.mr10, styles.pt3]}>
                  <Text>Add Location</Text>
                </View>
                <View>
                  <TextInput
                    placeholder="Write a caption"
                    multiline={true}
                  />
                </View>
              </View>
              <View>
              <View>
                <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                  <Text style={styles.buttonText}>Select photo</Text>
                </TouchableOpacity>
              </View>
              </View>
              <ScrollView horizontal={true}>
                {renderImageView()}
              </ScrollView>
            </View>
      </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0288D1',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center'
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  flex1:{
      flex: 1
  },
  textCenter:{
      textAlign: "center"
  },
  flexRow:{
      flexDirection: "row"
  },
  mlAuto:{
      // textAlign: "right"
      marginLeft: "auto"
  },
  pt3:{
    paddingTop: 3
  },
  m10:{
      margin:5
  },
  p10:{
      padding:10
  },
  mb10:{
      marginBottom:10
  },
  p15:{
      padding:15
  },
  p5:{
      padding:5
  },
  border1:{
      borderWidth: 1,
      borderColor: '#A9A9A9',
      borderRadius: 5
  },
  displayParent:{
      flexWrap: "wrap",
      // alignItems:"stretch"
  },
  displayChild:{
      margin: 2,
      height: 100,
      width: 115,
      backgroundColor: '#000000',
      alignSelf:'stretch'
  },
  displayChild2:{
      margin: 2,
      height: 200,
      width: 230,
      backgroundColor: '#000000',
  },
  colorBlue:{
    color: '#0288D1'
  },
  bbGray:{
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1
  },
  mr10:{
    marginRight: 10
  },
  pv10:{
    paddingVertical:10
  }
})

export default AddPostPage;