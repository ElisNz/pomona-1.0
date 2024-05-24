import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const ResultView = ({ result, setResult }) => {
  const [topMatch, setTopMatch] = useState(null);

  const iframeString = `<iframe src="https://www.google.com/search?q=${topMatch.species.scientificNameWithoutAuthor.replace(' ', '+')}" width="300" height="500"></iframe>`;

  useEffect(() => {
    setTopMatch(result.result?.results[0]);
    console.log(result.result?.results[0]);
  }, [result]);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(result.result)}{JSON.stringify(result.location)}</Text>
      <WebView
        javaScriptEnabled
        style={{ height: 500, width: 300 }}
        source={{
          html: `
                <!DOCTYPE html>
                <html>
                  <head></head> // <--add header styles if needed
                  <body>
                    <div id="baseDiv">${iframeString}</div> //<--- add your iframe here
                  </body>
                </html>
          `,
        }}
      ></WebView>
      <Pressable style={styles.button} onPress={() => setResult(null)}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Clear result</Text>
      </Pressable>
    </View>
  );
};

export default ResultView;
