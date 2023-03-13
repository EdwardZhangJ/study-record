<template>
  <!-- 创建节点 -->
  <div id="container"></div>
</template>

<script>
import {onMounted} from 'vue'
import {Graph, Cell} from '@antv/x6'
import ELK, {ElkNode, ElkEdge, ElkExtendedEdge} from 'elkjs'

export default {
  setup() {
    // 2. 数据
    // const data = {
    //   // 节点
    //   nodes: [
    //     {
    //       id: 'node1', // String，可选，节点的唯一标识
    //       x: 40, // Number，必选，节点位置的 x 值
    //       y: 40, // Number，必选，节点位置的 y 值
    //       width: 80, // Number，可选，节点大小的 width 值
    //       height: 40, // Number，可选，节点大小的 height 值
    //       label: 'hello', // String，节点标签
    //     },
    //     {
    //       id: 'node2', // String，节点的唯一标识
    //       x: 160, // Number，必选，节点位置的 x 值
    //       y: 180, // Number，必选，节点位置的 y 值
    //       width: 80, // Number，可选，节点大小的 width 值
    //       height: 40, // Number，可选，节点大小的 height 值
    //       label: 'world', // String，节点标签
    //     },
    //   ],
    //   // 边
    //   edges: [
    //     {
    //       source: 'node1', // String，必须，起始节点 id
    //       target: 'node2', // String，必须，目标节点 id
    //     },
    //   ],
    // }

    // const initGraph = () => {
    //   // 3. 渲染画布
    //   const graph = new Graph({
    //     container: document.getElementById('container'),
    //     width: 800,
    //     height: 600,
    //     background: {
    //       color: '#fffbe6', // 设置画布背景颜色
    //     },
    //     grid: {
    //       size: 10, // 网格大小 10px
    //       visible: true, // 渲染网格背景
    //     },
    //   })

    //   graph.fromJSON(data)
    // }

    const initGraph = () => {
      Graph.registerNode(
        'elk-node',
        {
          inherit: 'rect',
          attrs: {
            body: {
              fill: '#EFF4FF',
              stroke: '#5F95FF',
              strokeWidth: 1,
            },
            label: {
              refX: 0,
              refY: -4,
              textAnchor: 'start',
              textVerticalAnchor: 'bottom',
              fontSize: 10,
            },
          },
          ports: {
            groups: {
              port: {
                position: {
                  name: 'absolute',
                },
                attrs: {
                  portBody: {
                    magnet: 'passive',
                    fill: '#5F95FF',
                    refWidth: '100%',
                    refHeight: '100%',
                  },
                },
                markup: [
                  {
                    tagName: 'rect',
                    selector: 'portBody',
                  },
                ],
              },
            },
          },
        },
        true
      )

      Graph.registerEdge(
        'elk-edge',
        {
          inherit: 'edge',
          attrs: {
            line: {
              stroke: '#A2B1C3',
              strokeWidth: 1,
              targetMarker: {
                name: 'block',
                width: 4,
                height: 4,
              },
            },
          },
        },
        true
      )

      const portIdToNodeIdMap = {}
      const cells = []

      const graph = new Graph({
        container: document.getElementById('container'),
        interacting: false,
      })

      const elk = new ELK()

      const addChildren = (children, pos) => {
        children.forEach((child) => {
          const position = {
            x: (child.x || 0) + (pos ? pos.x : 0),
            y: (child.y || 0) + (pos ? pos.y : 0),
          }
          let label = ''
          if (typeof child.labels === 'string') {
            label = child.labels
          } else if (Array.isArray(child.labels) && child.labels[0]) {
            label = child.labels[0].text
          }
          const node = graph.createNode({
            shape: 'elk-node',
            id: child.id,
            position,
            label,
            size: {
              width: child.width || 0,
              height: child.height || 0,
            },
            ports: {
              items: (child.ports || []).map((item) => {
                portIdToNodeIdMap[item.id] = child.id
                return {
                  id: item.id,
                  group: 'port',
                  args: {
                    x: item.x,
                    y: item.y,
                  },
                  size: {
                    width: item.width || 0,
                    height: item.height || 0,
                  },
                }
              }),
            },
          })

          cells.push(node)

          if (child.children) {
            addChildren(child.children, position)
          }

          if (child.edges) {
            addEdges(child.edges, position)
          }
        })
      }

      const addEdges = (edges, pos) => {
        edges.forEach((edge) => {
          const {bendPoints = []} = edge.sections[0]

          if (pos) {
            bendPoints.map((bendPoint) => {
              bendPoint.x += pos.x
              bendPoint.y += pos.y
            })
          }

          const sourcePortId = edge.sources[0]
          const targetPortId = edge.targets[0]
          const sourceNodeId = portIdToNodeIdMap[sourcePortId]
          const targetNodeId = portIdToNodeIdMap[targetPortId]

          cells.push(
            graph.createEdge({
              shape: 'elk-edge',
              source: {
                cell: sourceNodeId,
                port: sourcePortId,
              },
              target: {
                cell: targetNodeId,
                port: targetPortId,
              },
              vertices: bendPoints,
            })
          )
        })
      }

      fetch('./public/data.json')
        .then((response) => response.json())
        .then((data) => {
          elk.layout(data).then((res) => {
            addChildren(res.children || [])
            addEdges(res.edges || [])
            graph.resetCells(cells)
            graph.zoomToFit({
              padding: 20,
              maxScale: 1,
            })
          })
        })
    }

    onMounted(() => {
      initGraph()
    })
    return {}
  },
}
</script>

<style></style>
