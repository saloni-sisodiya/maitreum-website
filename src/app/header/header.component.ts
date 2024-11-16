import { Component } from '@angular/core';

interface Feature {
  title: string;
  icon: string;
  bgColor: string;
}

interface Service {
  title: string;
  icon: string;
  bgColor?: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeLink: string = 'home';

  setActiveLink(link: string) {
    this.activeLink = link;
  }
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  

  features: Feature[] = [
    { title: 'Research', icon: 'assets/images/reserach.png', bgColor: '#FFE4E1' },
    { title: 'Design', icon: 'assets/images/design.png', bgColor: '#FFEFDB' },
    { title: 'Develop', icon: 'assets/images/develop.png', bgColor: '#E0F7FA' },
    { title: 'Test', icon: 'assets/images/test.png', bgColor: '#E3F2FD' },
    { title: 'Elevate', icon: 'assets/images/elevate.png', bgColor: '#FFF3E0' }
  ];


  services: Service[] = [
    { title: 'Website Development', icon: 'assets/images/website.png' , bgColor: '#FFE4E1'},
    { title: 'Java Project', icon: 'assets/images/java.png' },
    { title: 'Mobile Application Development', icon: 'assets/images/mobileapp.png' },
    { title: 'Cloud Solutions', icon: 'assets/images/cloud.png' },
    { title: 'UI/UX Design', icon: 'assets/images/ui-ux.png' },
    { title: 'Digital Marketing', icon: 'assets/images/digital.png' }
  ];

}
