import * as util from 'util';

class ListNode {
  public data: number;
  public next: ListNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  public head: ListNode | null;
  constructor(head: ListNode | null) {
    this.head = head;
  }
  public print(): void {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  public length(): number {
    let temp = this.head;
    let size = 0;
    while (temp !== null) {
      size++;
      temp = temp.next;
    }
    return size;
  }

  public pushNode(data: number): void {
    if (this.head === null) {
      this.head === new ListNode(data);
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new ListNode(data);
    }
  }

  public insertHead(data: number): void {
    let node = new ListNode(data);
    let temp = this.head;
    this.head = node;
    this.head.next = temp;
  }

  public find(value: number): boolean {
    let temp = this.head;
    while (temp !== null) {
      if (temp.data === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  public deleteHead(): void {
    if (this.head !== null) {
      this.head = this.head.next;
    }
  }
  public deleteNode(value: number): void {
    if (this.head === null) {
      return;
    }
    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous: ListNode | null = null;

    while (current !== null && current.data !== value) {
      previous = current;
      current = current.next!;
    }

    if (current === null) {
      return;
    }

    if (previous !== null) {
      previous.next = current.next;
    }
  }
}

const initialNode = new ListNode(0);
const newList = new LinkedList(initialNode);
for (let i = 0; i <= 10; i++) {
  newList.pushNode(5 * (i + 1));
}

newList.print();
// console.log(util.inspect(newList, true, null, true));

newList.deleteHead();
console.log('AFTER DELETE');
newList.print();

newList.deleteNode(25);
console.log('AFTER NODE DELETION');
newList.print();

// console.log(util.inspect(newList, true, null, true));
