import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab'

class ExampleMain extends Component {
   constructor(props) {
        super(props)
        this.handleSegmentChange = this.handleSegmentChange.bind(this)
        this.state = {
            secondTab: false
        }
    }
  handleSegmentChange(index) {
        this.setState({
            secondTab: index == 1
        })
         console.log(index)
    }
  render() {
    return (
      <View style={styles.container}>
            <Text>Default segmented control</Text>
            <SegmentedControlTab />
            <Text>Custom segmented control with custom styles</Text>
            <SegmentedControlTab values={['one', 'two']}
                onTabPress= {index => this.handleSegmentChange(index) }
                borderRadius={0}
                tabsContainerStyle={{height: 50, backgroundColor: '#F2F2F2'}}
                tabStyle={{backgroundColor: '#F2F2F2', borderWidth: 0}}
                activeTabStyle={{backgroundColor: 'white', marginTop: 2}}
                tabTextStyle={{color: '#444444', fontWeight: 'bold'}}
                activeTabTextStyle={{color: '#888888'}}/>
                {!this.state.secondTab &&
                  <Text style={styles.tabViewText}>First tab!!</Text>
                }
                 {this.state.secondTab &&
                  <Text style={styles.tabViewText}>Second tab!!</Text>
                }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10
  },
  tabViewText: {
    color: '#444444',
    fontWeight: 'bold',
    marginTop: 50,
    fontSize: 18
  }
});

export default ExampleMain
