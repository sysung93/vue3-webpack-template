//path 전역 모듈을 import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export
module.exports = {
  //parcel index.html
  //파일을 읽어들이기 시작하는 진입점 설정
  //상대경로로 표시
  entry: './js/main.js',

  //결과물(번들)을 반환하는 설정
  output: {
    //path는 절대경로를 사용해야함
    //resolve(1번경로, 2번경로) : 1, 2번 경로를 합쳐주는 역할을 함
    //__dirname : node.js 환경에서 사용할 수 있는 전역 변수. 현재 파일이 있는 그 경로를 지칭함.
    path: path.resolve(__dirname, 'dist'),
    
    //dist라는 폴더에 app.js라는 파일의 이름으로 entry에서 사용한 main.js에 연결된 모든 내용을 번들로 만들어서 합쳐준다.
    filename: 'main.js',
    //기존에 남아있던 옵션을 삭제
    clean: true
  },

  module: {
    rules: [
      { 
        //.css로 끝나는 확장자를 찾는 정규식
        test : /\.s?css$/,
        use : [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test : /\.js$/,
        user: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ]
}