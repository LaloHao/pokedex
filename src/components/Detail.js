// // @flow
// import React from 'react';
// import styled from 'styled-components/native';
// import type { Detail as Props } from 'types';
// import { CachedImage as Image } from 'react-native-cached-image';

// import { Colors } from 'assets';

// const Container = styled.View`
//   background-color: ${Colors.White};
//   padding: 10px;
//   flex-direction: column;
//   align-items: center;
//   margin: 5px;
//   flex: 1;
// `;

// const Text = styled.Text`
//   font-size: 14px;
// `;

// class Detail extends React.Component<Props> {
//   render() {
//     const style = { width: 120, height: 120 };
//     const { name, uri } = this.props;
//     return (
//       <Container>
//         <Image source={{ uri }} style={style} />
//         <Text>
//           {name}
//         </Text>
//       </Container>
//     );
//   }
// }

// export default Detail;
