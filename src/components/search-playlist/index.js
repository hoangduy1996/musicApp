import React, {Component} from 'react';
import {
    View,
    Content,
    Left,
    Body,
    Right,
    Item,
    Icon,
    Button,
    Text,
    List,
    ListItem,
    Thumbnail
} from 'native-base';
import {StyleSheet, Alert, Image} from 'react-native'
import {searchPlaylist} from '../../Api/DataBase'

export default class SearchPlaylist extends Component {
    render() {
        const {search_query} = this.props.param;
        const result = searchPlaylist(search_query);
        return (
            <Content style={styles.container}>
                <Text style={styles.text_title}>Playlist</Text>
                <List
                    dataArray={result}
                    renderRow={(item) => <ListItem
                    style={{
                    backgroundColor: 'transparent',
                    marginLeft: 5,
                    marginRight: 0,
                    padding: 0
                }}>
                    <Button transparent androidRippleColor full block height={60}>
                        <View style={styles.item_container}>
                            <View
                                style={{
                                flexDirection: 'row'
                            }}>
                                <Image source={item.url} style={styles.item_poster}/>
                                <View
                                    style={{
                                    marginLeft: 10
                                }}>
                                    <Text style={styles.item_title}>{item.name}</Text>
                                    <Text style={styles.item_sub_title}>{item.singer}</Text>
                                    <View style={styles.sub_view}>
                                        <Icon
                                            name='ios-headset'
                                            style={{
                                            color: 'gray',
                                            fontSize: 16
                                        }}/>
                                        <Text
                                            style={{
                                            color: 'gray',
                                            fontSize: 13,
                                            marginLeft: 5
                                        }}>{item.number}</Text>
                                    </View>
                                </View>
                            </View>
                            <Button transparent androidRippleColor>
                                <Icon
                                    name='ios-arrow-forward-outline'
                                    style={{
                                    color: 'gray'
                                }}/>
                            </Button>
                        </View>
                    </Button>
                </ListItem>}/>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingLeft: 5
    },
    text_title: {
        fontSize: 18
    },
    item_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    item_poster: {
        width: 60,
        height: 60,
        alignSelf: 'stretch'
    },
    item_title: {
        fontSize: 16
    },
    item_sub_title: {
        fontSize: 13,
        color: 'gray'
    },
    sub_view: {
        flexDirection: 'row'
    }
});