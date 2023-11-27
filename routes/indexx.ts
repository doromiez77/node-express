let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ["mon", "tue", "wed"];
let week2: Array<string> = ["mon", "tue", "wed"];

// 튜플

let b: [string, number];

b = ["z", 1];

b[0].toLowerCase();

//b[1].toLowerCase();

// void

function sayHello(): void {
  console.log("hello");
}

// never 항상 Error 반환 or 영원히 끝나지 않는 타입
function showError() {
  throw new Error();
}

function infLoop() {
  while (true) {
    // do sometiong... 영원히 끝나지않을때
  }
}

// enum

enum Os {
  Window,
  Ios,
  Android,
}

// eNum 은 수동으로 값 주지않을시 0부터 할당 자동으로 된다
//////

// null, undefined

let c: null = null;
let d: undefined = undefined;

// 인터페이스

interface User {
  name: String;
  age: number;
}

let user: User = {
  name: "xx",
  age: 30,
};

// implements

interface Car {
  clolor: string;
  wheels: number;
  start(): void;
}

// 함수 타입 정의
// optional 파라미터
function hello(name?: string) {
  return 'Hello, ${name || "word"}';
}

function hello2(name?: string) {
  return 'Hello, ${name || "word"}';
}

const result = hello();

// 함수 오버로드

// 리터럴 타입

type Job = "police" | "developer" | "teacher";

interface User {}

// union types

interface Car {
  name: "car";
  color: string;
  start(): void;
}

// intersection Types
// 교차타입
