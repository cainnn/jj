// const firstName = 'William';
// const lastName = 'William';
// const str = 'Hello there my name is Acai';
// const tags = 'web design;web development;programming';

// let val;
// val = firstName + lastName;

// val = firstName + ' ' + lastName;

// val = 'Henry';
// val += 'Cai';

// val = firstName.indexOf('l');
// val = firstName.charAt('4');
// val = firstName.charAt(firstName.length - 1);
// val = firstName.slice(0, 4);
// val = str.split(' ');
// val = tags.split(';');

// 字符串模板
// html = `
// <ul>
//   <li>Name:${name}</li>
//   <li>Name:${age}</li>
//   <li>Name:${job}</li>
//   <li>Name:${city}</li>
//   <li>@{age>30? 'Over 30':'Under 30'}</li>
// </ul>

//数组
numbers = [1, 22, 3, 4, 5, 6, 7];
numbers2 = [8, 9, 10];
fruits = ['Apple', 'Banana', 'Orange', 'Water Melon'];
// numbers.push(250);
//从前面添加
// numbers.unshift(120);
//从后面删除
// numbers.pop();
//从前在删除
// numbers.shift();

//删除多个
// numbers.splice(1, 3);
//反转
// numbers.reverse();
//数组拼接
// val = numbers.concat(numbers2);

//排序
val = fruits.sort();

//字符排序
val = numbers.sort();
console.log(val);

//数值排序
val = numbers.sort(function (x, y) {
  return x - y;
});
// console.log(numbers);
console.log(val);
