import React, { Component, PureComponent } from "react";
import "./App.scss";
import Cell from "./Cell";

const EASY = 1;
const NORMAL = 2;
const HARD = 3;

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isStarting: true,
      totalRow: 20,
      totalCol: 10,
      totalMine: 20,
      isLose: false,
      isWin: false,
      time: 0,
    };
  }

  getSettingLevelGame = (level) => {
    let totalMine, totalRow, totalCol;
    switch (level) {
      case 1:
        totalMine = 5;
        totalRow = 10;
        totalCol = 5;
        break;
      case 2:
        totalMine = 20;
        totalRow = 15;
        totalCol = 10;
        break;
      case 3:
        totalMine = 30;
        totalRow = 20;
        totalCol = 15;
        break;
      default:
    }
    return { totalMine, totalCol, totalRow };
  };

  newGame = (level) => {
    const list = [];
    const { totalRow, totalCol, totalMine } = this.getSettingLevelGame(level);
    for (let i = 0; i < totalRow; i++) {
      list[i] = [];
      for (let j = 0; j < totalCol; j++) {
        list[i][j] = {
          isOpen: false,
          isFlag: false,
          totalMineAround: null,
          isMine: false,
        };
      }
    }

    this.timer = setInterval(() => {
      this.setState((state) => {
        return { time: state.time + 1 };
      });
    }, 1000);

    for (let count = 0; count < totalMine; ) {
      const row = Math.round(Math.random() * (totalRow - 1));
      const col = Math.round(Math.random() * (totalCol - 1));
      if (!list[row][col].isMine) {
        list[row][col].isMine = true;
        count++;
      }
    }
    this.setState({
      totalCol,
      totalMine,
      totalRow,
      list,
      isWin: false,
      isLose: false,
      isStarting: false,
      time: 0,
    });
  };

  playAgainHandler = () => {
    this.setState({ isStarting: true });
  };

  countMineAround = (position) => {
    const { row, col } = position;
    let count = 0;

    for (let i = row - 1; i <= row + 1; i++) {
      if (!(i >= 0 && i < this.state.totalRow)) continue;
      for (let j = col - 1; j <= col + 1; j++) {
        if (!(j >= 0 && j < this.state.totalCol)) continue;
        if (this.state.list[i][j].isMine) count++;
      }
    }
    return count;
  };

  checkIsWin = () => {
    const { totalRow, totalCol, list } = this.state;
    for (let i = 0; i < totalRow; i++) {
      for (let j = 0; j < totalCol; j++) {
        if (!list[i][j].isOpen && !list[i][j].isMine) return false;
      }
    }
    return true;
  };

  openCellRegressiveHandler = (list, position) => {
    const { row, col } = position;
    if (list[row][col].isOpen) return false;
    list[row][col].isOpen = true;

    if (list[row][col].isMine) return true;

    const totalMine = this.countMineAround(position);

    if (totalMine > 0) {
      list[row][col].totalMine = totalMine;
    } else {
      let r1 = row === 0 ? 0 : -1;
      let c1 = col === 0 ? 0 : -1;
      let r2 = row === this.state.totalRow - 1 ? 1 : 2;
      let c2 = col === this.state.totalCol - 1 ? 1 : 2;

      for (; r1 < r2; r1++) {
        for (let j = c1; j < c2; j++) {
          this.openCellRegressiveHandler(list, { row: row + r1, col: col + j });
        }
      }
    }
    return false;
  };

  openCellHandler = (position) => {
    const list = [...this.state.list];
    const isOpenMine = this.openCellRegressiveHandler(list, position);

    this.setState({ list, isLose: isOpenMine }, () => {
      if (this.state.isLose) clearInterval(this.timer);
      else if (this.checkIsWin()) {
        clearInterval(this.timer);
        this.setState({ isWin: true });
      }
    });
  };

  toggleFlagHander = (position) => {
    const { row, col } = position;
    const list = [...this.state.list];
    list[row][col].isFlag = !list[row][col].isFlag;
    this.setState({ list });
  };
  componentDidMount() {}
  render() {
    return (
      <div className="app">
        <header>
          <h1>Dò mìn</h1>
          {this.state.isWin && <h2>WIN!</h2>}
          {this.state.isLose && <h2>LOSER!</h2>}
          {!this.state.isStarting && (
            <div className="info">
              <div className="flag">
                <i className="fas fa-flag"></i>
                <span>{this.state.totalMine}</span>
              </div>
              <div className="timer">
                <i className="fas fa-clock"></i>
                <span>{this.state.time} s</span>
              </div>
              <button onClick={this.playAgainHandler}>
                <i className="fas fa-redo-alt"></i>
                <span>Chơi lại</span>
              </button>
            </div>
          )}
        </header>

        <main>
          {this.state.isStarting ? (
            <div className="difficult-group">
              <button className="easy" onClick={() => this.newGame(EASY)}>
                Dễ
              </button>
              <button className="normal" onClick={() => this.newGame(NORMAL)}>
                Vừa
              </button>
              <button className="hard" onClick={() => this.newGame(HARD)}>
                Khó
              </button>
            </div>
          ) : (
            this.state.list.map((row, i) => (
              <div className="row" key={i}>
                {row.map((cell, j) => {
                  return (
                    <Cell
                      key={j}
                      cell={cell}
                      toggleFlagHandler={() =>
                        this.toggleFlagHander({ row: i, col: j })
                      }
                      openCellHandler={() =>
                        this.openCellHandler({
                          row: i,
                          col: j,
                        })
                      }
                      isLose={this.state.isLose}
                      isWin={this.state.isWin}
                    />
                  );
                })}
              </div>
            ))
          )}
        </main>
      </div>
    );
  }
}

export default App;
