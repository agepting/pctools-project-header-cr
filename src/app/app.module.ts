import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from "./app.component";
import { MediaQueryStatusComponent } from "./media-query-status.component";
import { ProjectHeaderComponent } from "./layout/project-header/project-header.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    MediaQueryStatusComponent,
    NavbarComponent,
    ProjectHeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
