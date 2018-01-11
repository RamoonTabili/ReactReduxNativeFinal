import React, { Component } from 'react';
import Search from "./Search";
import Cell from "./Cell";
import { Container, Header, Body, Title, Footer, FooterTab, Text } from 'native-base';
import { ScrollView } from 'react-native';


class MainScreen extends Component {
  render() {
      console.log("Loading Successful!");
    return (
      <Container>
        <Header>
            <Body>
                <Title>I'm Hungry af</Title>
            </Body>
        </Header>
        <ScrollView>
            <Search />
            <Cell />
        </ScrollView>
        <Footer>
            <FooterTab>
                <Body>
                    <Text>(c) Ramon Tabilin</Text>
                </Body>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}


export default MainScreen;