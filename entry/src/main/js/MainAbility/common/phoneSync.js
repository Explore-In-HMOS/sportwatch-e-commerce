// Phone Sync module - Simulates connection to phone - ES5 compatible

var status = {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  CONNECTING: 'CONNECTING'
};

function ensureSyncState() {
  if (!globalThis.phoneSync) {
    globalThis.phoneSync = {
      isConnected: true,
      phoneModel: 'iPhone 15 Pro',
      batteryLevel: Math.floor(Math.random() * 50) + 50,
      signalStrength: Math.floor(Math.random() * 3) + 2,
      notifications: generateNotifications(),
      lastSyncTime: new Date().toLocaleTimeString(),
      status: status.CONNECTED
    };
  }
  return globalThis.phoneSync;
}

export function initPhoneSync() {
  return ensureSyncState();
}

export function getPhoneSyncStatus() {
  return ensureSyncState();
}

export function getConnectionInfo() {
  var sync = ensureSyncState();
  return {
    isConnected: sync.isConnected,
    deviceName: sync.phoneModel,
    signalStrength: sync.signalStrength,
    batteryLevel: sync.batteryLevel,
    lastSyncTime: sync.lastSyncTime || ''
  };
}

export function getStatusText() {
  var sync = ensureSyncState();
  if (sync.status === status.CONNECTING) {
    return 'Connecting';
  }
  return sync.isConnected ? 'Connected' : 'Disconnected';
}

export function getStatusColor() {
  var sync = ensureSyncState();
  if (sync.status === status.CONNECTING) {
    return '#F39C12';
  }
  return sync.isConnected ? '#FF6B00' : '#666666';
}

export function isPhoneConnected() {
  return ensureSyncState().isConnected;
}

export function toggleConnection() {
  var sync = ensureSyncState();
  if (sync.isConnected) {
    sync.isConnected = false;
    sync.status = status.DISCONNECTED;
    return false;
  }
  sync.status = status.CONNECTING;
  setTimeout(function() {
    sync.isConnected = true;
    sync.status = status.CONNECTED;
    sync.lastSyncTime = new Date().toLocaleTimeString();
  }, 600);
  return true;
}

export function syncNow() {
  var sync = ensureSyncState();
  if (sync.isConnected) {
    sync.lastSyncTime = new Date().toLocaleTimeString();
    sync.batteryLevel = Math.floor(Math.random() * 50) + 50;
    sync.signalStrength = Math.floor(Math.random() * 3) + 2;
    sync.notifications = generateNotifications();
    return true;
  }
  return false;
}

export function getNotifications() {
  return ensureSyncState().notifications;
}

export function clearNotifications() {
  ensureSyncState().notifications = [];
}

export function addNotification(title, message) {
  ensureSyncState().notifications.unshift({
    id: Date.now(),
    title: title,
    message: message,
    time: new Date().toLocaleTimeString()
  });
}

function generateNotifications() {
  var types = [
    { title: 'Order Update', message: 'Your order has been shipped!' },
    { title: 'Flash Sale', message: '50% off electronics today!' },
    { title: 'Price Drop', message: 'Item in your cart is now cheaper' },
    { title: 'Back in Stock', message: 'Wireless earbuds available again' }
  ];

  var count = Math.floor(Math.random() * 3) + 1;
  var notifications = [];

  for (var i = 0; i < count; i++) {
    var type = types[Math.floor(Math.random() * types.length)];
    notifications.push({
      id: Date.now() + i,
      title: type.title,
      message: type.message,
      time: new Date().toLocaleTimeString()
    });
  }

  return notifications;
}

export function getSignalBars() {
  var strength = ensureSyncState().signalStrength;
  var bars = '';
  for (var i = 0; i < 4; i++) {
    bars += i < strength ? '|' : '.';
  }
  return bars;
}

export function getBatteryIcon() {
  var level = ensureSyncState().batteryLevel;
  if (level > 75) {return '####';}
  if (level > 50) {return '###-';}
  if (level > 25) {return '##--';}
  return '#---';
}
