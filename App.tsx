/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppContextProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { InvoiceList } from './components/Invoicing/InvoiceList';
import { InvoiceEditor } from './components/Invoicing/InvoiceEditor';
import { InvoicePreviewModal } from './components/Invoicing/InvoicePreviewModal';
import { InventoryList } from './components/Inventory/InventoryList';
import { ProductModal } from './components/Inventory/ProductModal';
import { StockMovementModal } from './components/Inventory/StockMovementModal';
import { ClientList } from './components/CRM/ClientList';
import { ClientModal } from './components/CRM/ClientModal';
import { ClientDetailModal } from './components/CRM/ClientDetailModal';
import { ExpenseManager } from './components/Finance/ExpenseManager';
import { ExpenseModal } from './components/Finance/ExpenseModal';
import { AIAssistantView } from './components/AI/AIAssistantView';
import { AIChatDrawer } from './components/AI/AIChatDrawer';
import { SettingsModal } from './components/SettingsModal';

const AppContent: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col md:flex-row font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Sidebar on left */}
      <Sidebar />

      {/* Main Content Area with Header at top */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar />

        <main className="flex-1 p-4 lg:p-6 overflow-y-auto max-w-7xl w-full mx-auto">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'invoices' && <InvoiceList />}
          {activeTab === 'inventory' && <InventoryList />}
          {activeTab === 'clients' && <ClientList />}
          {activeTab === 'finance' && <ExpenseManager />}
          {activeTab === 'ai_assistant' && <AIAssistantView />}
        </main>
      </div>

      {/* Modals & Drawers */}
      <InvoiceEditor />
      <InvoicePreviewModal />
      <ProductModal />
      <StockMovementModal />
      <ClientModal />
      <ClientDetailModal />
      <ExpenseModal />
      <SettingsModal />
      <AIChatDrawer />
    </div>
  );
};

export default function App() {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}
