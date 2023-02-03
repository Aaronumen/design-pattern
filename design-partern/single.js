class Storage {
  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
      return Storage.instance;
    }
    return Storage.instance;
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
  setItem(key, value) {
    localStorage.setItem(key, value);
  }
}
const storage1 = new Storage.getInstance();

const storage2 = new Storage.getInstance();

console.log('-------------------------------单例模式-----------------------------');

storage1.setItem("name", "孙");

console.log(storage1.getItem("name"), storage2.getItem("name"));

console.log(storage1 === storage2);
