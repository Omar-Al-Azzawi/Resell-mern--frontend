function cov_ljyjk5z3j() {
  var path = "/Users/omaralazzawi/Desktop/Resell fullstack mern/client/full-stack-fe/src/featurs/searchSlice.tsx";
  var hash = "3b0844f75fc005976db8d4dee4169ca6431100b7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/omaralazzawi/Desktop/Resell fullstack mern/client/full-stack-fe/src/featurs/searchSlice.tsx",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 20
        },
        end: {
          line: 18,
          column: 2
        }
      },
      "2": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 41
        }
      },
      "3": {
        start: {
          line: 20,
          column: 29
        },
        end: {
          line: 20,
          column: 48
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 19
          },
          end: {
            line: 14,
            column: 20
          }
        },
        loc: {
          start: {
            line: 14,
            column: 38
          },
          end: {
            line: 16,
            column: 9
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3b0844f75fc005976db8d4dee4169ca6431100b7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ljyjk5z3j = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ljyjk5z3j();
import { createSlice } from '@reduxjs/toolkit';
const initialState = (cov_ljyjk5z3j().s[0]++, {
  search: '',
  searchResult: [],
  searchLoading: false,
  searchError: null
});
const searchSlice = (cov_ljyjk5z3j().s[1]++, createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      cov_ljyjk5z3j().f[0]++;
      cov_ljyjk5z3j().s[2]++;
      state.search = action.payload;
    }
  }
}));
export const {
  setSearch
} = (cov_ljyjk5z3j().s[3]++, searchSlice.actions);
export default searchSlice.reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaFNsaWNlLnRzeCJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInNlYXJjaCIsInNlYXJjaFJlc3VsdCIsInNlYXJjaExvYWRpbmciLCJzZWFyY2hFcnJvciIsInNlYXJjaFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0U2VhcmNoIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsV0FBVCxRQUE0QixrQkFBNUI7QUFFQSxNQUFNQyxZQUFZLDRCQUFHO0FBQ2pCQyxFQUFBQSxNQUFNLEVBQUUsRUFEUztBQUVqQkMsRUFBQUEsWUFBWSxFQUFFLEVBRkc7QUFHakJDLEVBQUFBLGFBQWEsRUFBRSxLQUhFO0FBSWpCQyxFQUFBQSxXQUFXLEVBQUU7QUFKSSxDQUFILENBQWxCO0FBT0EsTUFBTUMsV0FBVyw0QkFBR04sV0FBVyxDQUFDO0FBQzVCTyxFQUFBQSxJQUFJLEVBQUUsUUFEc0I7QUFFNUJOLEVBQUFBLFlBRjRCO0FBRzVCTyxFQUFBQSxRQUFRLEVBQUU7QUFDTkMsSUFBQUEsU0FBUyxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUFBO0FBQUE7QUFDMUJELE1BQUFBLEtBQUssQ0FBQ1IsTUFBTixHQUFlUyxNQUFNLENBQUNDLE9BQXRCO0FBQ0g7QUFISztBQUhrQixDQUFELENBQWQsQ0FBakI7QUFVQSxPQUFPLE1BQU07QUFBRUgsRUFBQUE7QUFBRiw2QkFBZ0JILFdBQVcsQ0FBQ08sT0FBNUIsQ0FBTjtBQUNQLGVBQWVQLFdBQVcsQ0FBQ1EsT0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBzZWFyY2g6ICcnLFxuICAgIHNlYXJjaFJlc3VsdDogW10sXG4gICAgc2VhcmNoTG9hZGluZzogZmFsc2UsXG4gICAgc2VhcmNoRXJyb3I6IG51bGwsXG59XG5cbmNvbnN0IHNlYXJjaFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdzZWFyY2gnLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRTZWFyY2g6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2ggPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgc2V0U2VhcmNoIH0gPSBzZWFyY2hTbGljZS5hY3Rpb25zXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hTbGljZS5yZWR1Y2VyIl19