<template>
  <div>
    <Header @save="handleSaveClick"/>
    <div :style="{height: screenHeight + 'px'}">

      <component-tabs
        :style="style.componentTabs"
        :components="components"
        @click="handleTabClick"></component-tabs>

      <phone-box
        :style="style.phoneBox"
        :designs="designs"
        :editing="editing"
        @click="handleDesignClick"></phone-box>

      <setting-box
        :style="style.settingBox"
        :editing="editing"></setting-box>

    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import ComponentTabs from '../components/ComponentTabs'
import PhoneBox from '../components/PhoneBox'
import SettingBox from '../components/SettingBox'
import TitlePreview from '../components/title/TitlePreview'
import TitleSetting from '../components/title/TitleSetting'
import TextPreview from '../components/text/TextPreview'
import TextSetting from '../components/text/TextSetting'
import WhitePreview from '../components/white/WhitePreview'
import WhiteSetting from '../components/white/WhiteSetting'
import Search from '../components/search/Search'
import SearchSetting from '../components/search/SearchSetting'
import CirImageSetting from '../components/circleImage/CirImageSetting'
import CirImage from '../components/circleImage/CirImage'
import TopTab from '../components/tab/TopTab'
import TopTabSetting from '../components/tab/TopTabSetting'
import GoodDetail from '../components/good/GoodDetai'
import GoodSetting from '../components/good/GoodDetaiSetting'
import TableBar from '../components/tableBar/TableBar'
import TableBarSetting from '../components/tableBar/TableBarSetting'
import Gride from '../components/grd/Gride'
import GrideSetting from '../components/grd/GrideSetting'
import ImagePreview from '../components/image/ImagePreview'
import ImageSetting from '../components/image/ImageSetting'
import Leftside from '../components/leftside/LeftSide'
import LeftsideSetting from '../components/leftside/LeftSideSetting'
import SingDetail from '../components/singleDetail/SingDetail'
import SingDetailSetting from '../components/singleDetail/SingDetailSetting'
import Detailgood from '../components/detailgood/detailgood'
import DetailgoodSetting from '../components/detailgood/detailgoodSetting'
import { Toast } from 'vant'
export default {
  name: 'ColEditWindow',
  components: { Header, ComponentTabs, PhoneBox, SettingBox },
  data: function () {
    return {
      // 屏幕尺寸
      screenHeight: 0,
      screenWidth: 0,
      components: {
        // 模块组件数据
        modules: [
          {
            name: '自定义搜索',
            icon: 'font-icon font-icon-1',
            type: 1,
            preview: Search,
            setting: {
              title: '搜索',
              component: SearchSetting
            },
            data: {
              placeholder: '请输入搜索关键字'
            }
          },
          {
            name: '导航栏',
            icon: 'font-icon font-icon-1',
            type: 2,
            preview: TopTab,
            setting: {
              title: '自定义导航栏设置',
              component: TopTabSetting
            },
            data: {
              tabliest: [{
                text: '导航1',
                icon: 'photo-o'
              }, {
                text: '导航2',
                icon: 'photo-o'
              }, {
                text: '导航3',
                icon: 'photo-o'
              }]
            }
          },
          {
            name: '轮播图',
            icon: 'font-icon font-icon-1',
            type: 3,
            preview: CirImage,
            setting: {
              title: '轮播图设置',
              component: CirImageSetting
            },
            data: {
              images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg'
              ],
              height: 150
            }
          },
          {
            name: '模块',
            icon: 'font-icon font-icon-1',
            type: 4,
            preview: Gride,
            setting: {
              title: '模块设置',
              component: GrideSetting
            },
            data: {
              columnNum: 4,
              columnList: [{
                text: '酒店',
                icon: 'photo-o'
              }, {
                text: '自由行',
                icon: 'photo-o'
              }, {
                text: '跟团游',
                icon: 'photo-o'
              }, {
                text: '租车',
                icon: 'photo-o'
              }, {
                text: '车票',
                icon: 'photo-o'
              }, {
                text: '火车票',
                icon: 'photo-o'
              }, {
                text: '轮船',
                icon: 'photo-o'
              }, {
                text: '其他',
                icon: 'photo-o'
              }]
            }
          },
          {
            name: '商品',
            icon: 'font-icon font-icon-1',
            type: 5,
            preview: GoodDetail,
            setting: {
              title: '商品详情',
              component: GoodSetting
            },
            data: {
              goodList: [{
                imageUrl: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                text: 'macbook pro 新款',
                price: '22.3'
              }, {
                imageUrl: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                text: 'iphone新款',
                price: '22.8'}]
            }
          },
          {
            name: 'Tabar',
            icon: 'font-icon font-icon-1',
            type: 6,
            preview: TableBar,
            setting: {
              title: '底部导航',
              component: TableBarSetting
            },
            data: {
              tabarList:
                [{
                  text: '主页',
                  icon: 'photo-o'
                }, {
                  text: '朋友',
                  icon: 'friends-o'
                }, {
                  text: '我的',
                  icon: 'photo-o'
                }
                ]
            }
          },
          {
            name: '右侧导航',
            icon: 'font-icon font-icon-1',
            type: 7,
            preview: Leftside,
            setting: {
              title: '右侧导航',
              component: LeftsideSetting
            },
            data: {
              tabarList:
                [{
                  text: '主页',
                  icon: 'photo-o'
                }, {
                  text: '朋友',
                  icon: 'friends-o'
                }, {
                  text: '我的',
                  icon: 'photo-o'
                }
                ]
            }
          },
          {
            name: '订单详情',
            icon: 'font-icon font-icon-1',
            type: 8,
            preview: Detailgood,
            setting: {
              title: '订单详情',
              component: DetailgoodSetting
            },
            data: {
              goodDetail: {
                url: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '卖萌猫',
                price: '7799',
                description: '这个猫非常好，很好看，很萌，和粘人，你值得拥有,绝佳品种，性格温和，反正就是非常好'
              }
            }
          },
          {
            name: '订单详情购买',
            icon: 'font-icon font-icon-1',
            type: 9,
            preview: SingDetail,
            setting: {
              title: '订单详情',
              component: SingDetailSetting
            },
            data: {
              goodDetail: {
                url: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '卖萌猫',
                price: '7799',
                description: '这个猫非常好，很好看，很萌，和粘人，你值得拥有,绝佳品种，性格温和，反正就是非常好'
              }
            }
          }, {
            name: '.....',
            icon: 'font-icon font-icon-1',
            type: 9,
            preview: SingDetail,
            setting: {
              title: '订单详情',
              component: SingDetailSetting
            },
            data: {
              goodDetail: {
                url: 'https://img.yzcdn.cn/vant/apple-2.jpg',
                name: '卖萌猫',
                price: '7799',
                description: '这个猫非常好，很好看，很萌，和粘人，你值得拥有,绝佳品种，性格温和，反正就是非常好'
              }
            }
          }

        ],
        // 基本组件数据
        basics: [
          {
            name: '标题',
            icon: 'font-icon font-icon-11',
            type: 9,
            preview: TitlePreview,
            setting: {
              title: '标题栏设置',
              component: TitleSetting
            },
            data: {
              title: '标题栏'
            }
          },
          {
            name: '文本',
            icon: 'font-icon font-icon-12',
            type: 10,
            preview: TextPreview,
            setting: {
              title: '文本设置',
              component: TextSetting
            },
            data: {
              text: '请输入内容'
            }
          },
          {
            name: '图片',
            icon: 'font-icon font-icon-13',
            type: 11,
            preview: ImagePreview,
            setting: {
              title: '图片设置',
              component: ImageSetting
            },
            data: {
              imageType: 1,
              images: []
            }
          },
          {name: '轮播图', icon: 'font-icon font-icon-14', type: 12, preview: 1, setting: 2, data: {}},
          {name: '视频', icon: 'font-icon font-icon-15', type: 13, preview: 1, setting: 2, data: {}},
          {name: '图文', icon: 'font-icon font-icon-16', type: 14, preview: 1, setting: 2, data: {}},
          {
            name: '占位符',
            icon: 'font-icon font-icon-17',
            type: 15,
            preview: WhitePreview,
            setting: {
              title: '占位符设置',
              component: WhiteSetting
            },
            data: {
              height: 10
            }
          }
        ]
      },
      // 用户正在编辑的网站数据
      designs: [],
      // 设置项
      editing: null
    }
  },
  computed: {
    style: function () {
      return {
        componentTabs: {
          float: 'left',
          width: '220px',
          height: '100%',
          overflow: 'hidden'
        },
        phoneBox: {
          float: 'left',
          width: this.screenWidth - 720 + 'px',
          height: '100%'
        },
        settingBox: {
          float: 'right',
          width: '500px',
          height: '100%',
          overflow: 'auto'
        }
      }
    }
  },
  methods: {
    handleTabClick: function (component) {
      let designData = {
        type: component.type,
        preview: component.preview,
        setting: component.setting,
        data: {
          type: component.type,
          // 深度复制
          ...JSON.parse(JSON.stringify(component.data))
        }
      }
      this.designs.push(designData)
      this.editing = designData
    },
    handleDesignClick: function (designData) {
      this.editing = designData
    },
    handleSaveClick: function () {
      let oInput = document.createElement('input')
      oInput.value = JSON.stringify(this.designs.map(({data}) => ({...data})))
      document.body.appendChild(oInput)
      oInput.select()
      document.execCommand('Copy')
      oInput.style.display = 'none'
      document.body.removeChild(oInput)
      console.log(JSON.stringify(this.designs.map(({data}) => ({...data}))))
      Toast.success('以成功复制到剪贴板，直接粘贴即可')
      var name = 'configInfo.txt'
      var urlObject = window.URL || window.webkitURL || window
      var exportBlob = new Blob([JSON.stringify(this.designs.map(({data}) => ({...data})))])
      var saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
      saveLink.href = urlObject.createObjectURL(exportBlob)
      saveLink.download = name
      saveLink.click()
    }
  },
  mounted: function () {
    const onResize = () => {
      this.screenHeight = document.body.clientHeight - 60
      this.screenWidth = document.body.clientWidth
      console.log(document.body.clientWidth)
    }
    onResize()
    window.addEventListener('resize', onResize, false)
  }
}
</script>

<style scoped>
</style>
