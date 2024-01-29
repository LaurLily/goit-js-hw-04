const profile = {
    username: "Jacob",
    playTime: 300,
  
    // Зміна імені
    changeUsername: function(newName) {
      this.username = newName;
    },
  
    // Оновлення годин гри
    updatePlayTime: function(hours) {
      this.playTime += hours;
    },
  
    // Отримання інформації
    getInfo: function() {
      return `${this.username} has ${this.playTime} active hours!`;
    }
};
  
// Перевірка
console.log(profile.getInfo()); // "Jacob has 300 active hours!"
  
profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"
  
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
  