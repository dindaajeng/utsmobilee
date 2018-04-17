import React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text>SisPemLat UKM PMI Undiksha</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  render() {
    return (
      <View style={styles.containerMain}>
          <View style={styles.box1}>
            <View style={{ margin: 8, alignItems: 'center' }}>
              <Image source={require('./images/logoukm.png')} style={styles.image} />
            </View>
            <View style={{ margin: 20 }}>
              <Button
                width="80"
                height="70"
                title="Input "
                onPress={() => this.props.navigation.navigate('Input')}
                color="#00FF00"
              />
            </View>
            <View style={{ marginTop: 5, marginLeft: 20, marginRight: 20 }}>
                <Button
                  onPress={() => this.props.navigation.navigate('Detail')}
                  title="Lihat "
                  width="80"
                  height="70"
                  color="#00FF00"
                />
              </View>
          </View>
          <View style={styles.footer}>
            <Text style={{ padding: 10, fontSize: 15, color: 'white' }}>Copyright@DindaAjeng</Text>
          </View>
       </View>
      );
    }
  }
  class InputScreen extends React.Component {
    static navigationOptions = {
      headerTitle: <LogoTitle />,
    };
    constructor(props) {
          super(props);
          this.state = {
            nim: '',
            nama: '',
            jurusan: '',
            telp: '',
            nama_alat: '',
            jumlah: '',
            tgl_pinjam: '',
            tgl_kembali: '',
          };
        }

        Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://gusnando.com/mobile/dinda/daftar.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nim: '',
                  nama: '',
                  jurusan: '',
                  telp: '',
                  nama_alat: '',
                  jumlah: '',
                  tgl_pinjam: '',
                  tgl_kembali: '',

                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
               Alert.alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading: false });
            }).catch((error) =>
            {
                console.error(error);
                /*Alert.alert(
                  'Oops!',
                  'Something went wrong!',
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )*/
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

        render() {
          return (
            <View style={styles.containerMain}>
              <View style={styles.kotak}>
                <TextInput
                  style={styles.Input}
                  placeholder="Nama "
                  onChangeText={(nama) => this.setState({ nama })}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Nim "
                  onChangeText={(nim) => this.setState({ nim })}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Jurusan "
                  onChangeText={(jurusan) => this.setState({ jurusan })}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Telp "
                  onChangeText={(telp) => this.setState({ telp })}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Nama Alat "
                  onChangeText={(nama_alat)=> this.setState({ nama_alat })}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Jumlah "
                  onChangeText={(jumlah) => this.setState({ jumlah })}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Tanggal Peminjaman "
                  onChangeText={(tgl_pinjam) => this.setState({ tgl_pinjam })}
                />
                <TextInput
                  style={styles.Input}
                  placeholder="Tanggal Pengembalian "
                  onChangeText={(tgl_kembali) => this.setState({ tgl_kembali })}
                />
                <View style={{ alignItems: 'center', margin: 6, justifyContent: 'center' }}>
                <Button
              title="Simpan"
              color="#00FFFF"
              onPress={() => {
                this.props.navigation.navigate('Detail', {
                  nama: this.state.nama,
                  nim: this.state.nim,
                  jurusan: this.state.jurusan,
                  telp: this.state.telp,
                  nama_alat: this.state.nama_alat,
                  jumlah: this.state.jumlah,
                  tgl_pinjam: this.state.tgl_pinjam,
                  tgl_kembali: this.state.tgl_kembali,
                });
              }}
                   />
                </View>
                <View style={{ alignItems: 'center', marginTop: 5, margin: 5, justifyContent: 'center' }}>
                  <Button
                    title="Batal"
                    onPress={() => this.props.navigation.goBack()}
                    color="#00FFFF"
                  />
                </View>
              </View>
            </View>
          );
        }
      }

      class DetailScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  render() {
    const { params } = this.props.navigation.state;
    const nama = params ? params.nama : null;
    const nim = params ? params.nim : null;
    const jurusan = params ? params.jurusan : null;
    const telp = params ? params.telp : null;
    const nama_alat = params ? params.nama_alat : null;
    const jumlah = params ? params.jumlah : null;
    const tgl_pinjam = params ? params.tgl_pinjam : null;
    const tgl_kembali = params ? params.tgl_kembali : null;
return (
    <View style={{ flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
            <Text>Nama  : {JSON.stringify(nama)}</Text>
            <Text>Nim       : {JSON.stringify(nim)}</Text>
            <Text>Jurusan       : {JSON.stringify(jurusan)}</Text>
            <Text>Telp  : {JSON.stringify(telp)}</Text>
            <Text>nama_alat     : {JSON.stringify(nama_alat)}</Text>
            <Text>Jumlah      : {JSON.stringify(jumlah)}</Text>
            <Text>Tgl_pinjam  : {JSON.stringify(tgl_pinjam)}</Text>
            <Text>Tgl_kembali   : {JSON.stringify(tgl_kembali)}</Text>
              <Button
                title="Batal"
                onPress={() => this.props.navigation.goBack()}
                color="#00FFFF"
              />
            </View>
      );
    }
    }

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Input: {
      screen: InputScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
Input: {
  height: 40,
  width: 300,
  marginTop: 10,
  textAlign: 'center',
  marginRight: 10,
  marginLeft: 28,
  margin: 10,
  backgroundColor: 'white'
},
kontak: {
  marginTop: 8,
  marginLeft: 15,
  marginRight: 15,
  backgroundColor: '#90CAF9',
  flex: 0.97,
},
image: {
    width: 100,
    height: 100,
    marginTop: 2
  },
  footer: {
    flex: 0.35,
    backgroundColor: '#0D47A1',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  box1: {
   flex: 3,
   backgroundColor: '#90CAF9',
   margin: 15,
   justifyContent: 'center',
 },
});
