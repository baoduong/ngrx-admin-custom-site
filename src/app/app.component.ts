/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'wye-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  currentApplicationVersion = environment.appVersion;

  constructor(private analytics: AnalyticsService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    // this.analytics.trackPageViews();
    // this.seoService.trackCanonicalChanges();
  }
}
