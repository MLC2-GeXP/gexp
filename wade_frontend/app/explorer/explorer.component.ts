import {Component, OnInit} from "@angular/core";
/**
 * Created by calin.crist on 15/01/2017.
 */

const url = 'app/explorer/loadCharts.js';

@Component({
    moduleId: module.id,
    templateUrl: 'explorer.component.html',
    styleUrls: ['explorer.component.css']
})

export class ExplorerComponent implements OnInit {
    pageTitle: string = 'Data Explorer';

    ngOnInit(): void {
        ExplorerComponent.loadScript(url)
    }

    public static loadScript(url: string) {
        console.log('preparing to load...');
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
        console.log('loaded');
    }
}