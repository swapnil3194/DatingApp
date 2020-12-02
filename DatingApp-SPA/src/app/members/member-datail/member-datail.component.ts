import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryLayout, NgxGalleryOptions } from 'ngx-gallery';
import { User } from '../../_models/user';
import { AlertifyService } from '../../_services/alertify.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-member-datail',
  templateUrl: './member-datail.component.html',
  styleUrls: ['./member-datail.component.css']
})
export class MemberDatailComponent implements OnInit {
 user: User;
 galleryOptions: NgxGalleryOptions[];
 galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private altertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    this.galleryOptions = [
      {
          width: '500px',
          height: '500px',
          thumbnailsColumns: 4,
          imagePercent: 100,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: false
      }
    ];
    this.galleryImages = this.getImages();
  }


  getImages() {
    const imageUrls = [];
    for (const photo of this.user.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });
    }
    return imageUrls;
  }

}
