import { Component, OnInit } from '@angular/core';
import { Node, Edge, ClusterNode } from '@swimlane/ngx-graph';




interface CustomNode extends Node {
  data: {
    name: string;
    imageURL: string;
    color: string;
  };
}
@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls:['sample-page.component.css']
})
export class AppSamplePageComponent implements OnInit {

  nodes: CustomNode[] = [];
  links: Edge[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.initializeTree();
  }

  initializeTree(): void {
    const data = {
      id: 'Lucas_Alex',
      data: {
        name: 'Lucas Alex',
        imageURL: 'https://i.pravatar.cc/300?img=68',
      },
      options: {
        nodeBGColor: '#94ddff',
      },
      children: [
        {
          id: 'Alex_Lee',
          data: {
            name: 'Alex Lee',
            imageURL: 'https://i.pravatar.cc/300?img=69',
          },
          options: {
            nodeBGColor: '#ffc7c2',
          },
          children: [
            {
              id: 'Mia_Patel',
              data: {
                name: 'Mia Patel',
                imageURL: 'https://i.pravatar.cc/300?img=49',
              },
              options: {
                nodeBGColor: '#e3c2ff',
              },
            },
            {
              id: 'Ryan_Clark',
              data: {
                name: 'Ryan Clark',
                imageURL: 'https://i.pravatar.cc/300?img=13',
              },
              options: {
                nodeBGColor: '#e3c2ff',
              },
            },
            {
              id: 'Zoe_Wang',
              data: {
                name: 'Zoe Wang',
                imageURL: 'https://i.pravatar.cc/300?img=54',
              },
              options: {
                nodeBGColor: '#e3c2ff',
              },
            },
          ],
        },
        {
          id: 'Leo_Kim',
          data: {
            name: 'Leo Kim',
            imageURL: 'https://i.pravatar.cc/300?img=43',
          },
          options: {
            nodeBGColor: '#ffc7c2',
          },
          children: [
            {
              id: 'Ava_Jones',
              data: {
                name: 'Ava Jones',
                imageURL: 'https://i.pravatar.cc/300?img=51',
              },
              options: {
                nodeBGColor: '#d2edc5',
              },
            },
            {
              id: 'Maya_Gupta',
              data: {
                name: 'Maya Gupta',
                imageURL: 'https://i.pravatar.cc/300?img=45',
              },
              options: {
                nodeBGColor: '#d2edc5',
              },
            },
          ],
        },
        {
          id: 'Lily_Chen',
          data: {
            name: 'Lily Chen',
            imageURL: 'https://i.pravatar.cc/300?img=52',
          },
          options: {
            nodeBGColor: '#ffc7c2',
          },
          children: [
            {
              id: 'Jake_Scott',
              data: {
                name: 'Jake Scott',
                imageURL: 'https://i.pravatar.cc/300?img=65',
              },
              options: {
                nodeBGColor: '#e9f08f',
              },
            },
          ],
        },
        {
          id: 'Max_Ruiz',
          data: {
            name: 'Max Ruiz',
            imageURL: 'https://i.pravatar.cc/300?img=50',
          },
          options: {
            nodeBGColor: '#ffc7c2',
          },
        },
      ],
    };

    const processNode = (node: any, parent: any = null): void => {
      this.nodes.push({
        id: node.id,
        label: node.data.name,
        data: {
          name: node.data.name,
          imageURL: node.data.imageURL,
          color: node.options.nodeBGColor
        },
        dimension: {width: 150, height: 70}
      });

      if (parent) {
        this.links.push({
          id: `${parent.id}-${node.id}`,
          source: parent.id,
          target: node.id
        });
      }

      if (node.children) {
        node.children.forEach((child: any) => processNode(child, node));
      }
    };

    processNode(data);
  }
}
