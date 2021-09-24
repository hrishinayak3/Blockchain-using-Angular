import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainViewerComponent,
    BlockViewComponent,
    CreateTransactionComponent,
    PendingTransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
