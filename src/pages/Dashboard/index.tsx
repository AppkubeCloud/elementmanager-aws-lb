import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export class Dashboard extends React.Component<any, any> {
	breadCrumbs: any;
	constructor(props: any) {
		super(props);
		this.state = {
			analyslsToggle: false,
      tabChangeProductToggle: false,
      activeTab: 0,
      selectCustomDate: false,
      selectionRange: {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
		};
		this.breadCrumbs = [
			{
				label: 'Home',
				route: `/`
			},
			{
				label: 'Iframe | Home',
				isCurrentPage: true
			}
		];
	}

  setActiveTab = (activeTab: any) => {
    this.setState({
      activeTab,
    });
  };

  handleSelect = (ranges: any) => {
    this.setState({selectionRange: ranges.selection})
  }

	render() {
		const { analyslsToggle, tabChangeProductToggle, activeTab, selectCustomDate, selectionRange } = this.state;
		return (
			<div className="statistics-dashboard-container">
				<Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="ELEMENT MANAGER" />
				<div className="statistics-container">
					<div className="statistics-left">
						<div className="heading">General statistics</div>
					</div>
					<div className="statistics-right">
						<div className="buttons">
							<button className="btn">1d</button>
							<button className="btn">3d</button>
							<button className="btn">1W</button>
							<button className="btn active">1M</button>
							<button className="btn">3M</button>
							<button className="btn">6M</button>
							<button className="btn">1yr</button>
							<button 
                className="btn"
                onClick={() =>
									this.setState({
										selectCustomDate: !selectCustomDate
								})}
              >
                Custom <i className="fa fa-calendar"></i>
              </button>
              <div className={
									selectCustomDate === true ? (
										'select-custom-date active'
									) : (
										'select-custom-date'
									)
								}
              >
                <DateRangePicker
                  ranges={[selectionRange]}
                  onChange={this.handleSelect}
                  months={2}
                  moveRangeOnFirstSelection={false}
                  direction="horizontal"
                />
              </div>
						</div>
						<div className="analysls-toggle-main">
							<button 
								className="btn analysls-btn"
								onClick={() =>
									this.setState({
										analyslsToggle: !analyslsToggle
								})}
							>
								Analysls 
								<i className="fa fa-caret-down"></i>
							</button>
							<div
								className={
									analyslsToggle === true ? (
										'toggle active'
									) : (
										'toggle'
									)
								}
							>
								<ul>
									<li>Active/New Flow</li>
									<li className="active">Host Health Status</li>
									<li>Errors</li>
									<li>Consumed LCUs</li>
								</ul>
							</div>
							<div
								className={
									analyslsToggle === true ? (
										'statistics-toggle-bg active'
									) : (
										'statistics-toggle-bg'
									)
								}
								onClick={() =>
									this.setState({ analyslsToggle: !analyslsToggle })}
							/>
						</div>
					</div>
				</div>
				<div className="statistics-tabs">
          <div className="tab-head">
            <div className="tabs-left">
              <ul>
                <li className={activeTab === 0 ? 'active' : ''} onClick={(e) => this.setActiveTab(0)}>All Product</li>
                <li className={activeTab === 1 ? 'active' : ''} onClick={(e) => this.setActiveTab(1)}>Product 1</li>
                <li className={activeTab === 2 ? 'active' : ''} onClick={(e) => this.setActiveTab(2)}>Product 2</li>
                <li className={activeTab === 3 ? 'active' : ''} onClick={(e) => this.setActiveTab(3)}>Product 3</li>
              </ul>
            </div>
            <div className="tabs-right">
              <div className="tab-change-product">
                <button 
                  className="btn"
                  onClick={() =>
                    this.setState({
                      tabChangeProductToggle: !tabChangeProductToggle
                  })}
                >
                  Change Product
                </button>
                <div
                  className={
                    tabChangeProductToggle === true ? (
                      'toggle active'
                    ) : (
                      'toggle'
                    )
                  }
                >
                  <div className="total-product-main">
                    <div className="total-product">
                      <span>Total Product</span>
                      <strong>24</strong>
                    </div>
                    <button className="btn view-btn">
                      View Products
                    </button>
                  </div>
                  <div className="products-list">
                    <label>
                      Product 1
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 2
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 3
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 4
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 5
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 6
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 7
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 8
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 9
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 10
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 11
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 12
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 13
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 14
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                    <label>
                      Product 15
                      <input type={'checkbox'} />
                      <div className="control__indicator"></div>
                    </label>
                  </div>
                </div>
                <div
                  className={
                    tabChangeProductToggle === true ? (
                      'statistics-toggle-bg active'
                    ) : (
                      'statistics-toggle-bg'
                    )
                  }
                  onClick={() =>
                    this.setState({ tabChangeProductToggle: !tabChangeProductToggle })}
                />
              </div>
            </div>		
          </div>
          <div className="tab-contents">
            {activeTab === 0 && (
              <div className={activeTab === 0 ? 'content active' : 'content'}>
                <iframe src="https://www.javatpoint.com/" width={'100%'} height={400}></iframe>  
              </div>
            )}
            {activeTab === 1 && (
              <div className={activeTab === 1 ? 'content active' : 'content'}>
                <iframe src="https://www.tutorialrepublic.com/" width={'100%'} height={400}></iframe>  
              </div>
            )}
            {activeTab === 2 && (
              <div className={activeTab === 2 ? 'content active' : 'content'}>
                <iframe src="http://www.example.com/" width={'100%'} height={400}></iframe>  
              </div>
            )}
            {activeTab === 3 && (
              <div className={activeTab === 3 ? 'content active' : 'content'}>
                <iframe src="https://player.vimeo.com/video/76979872" width={'100%'} height={400}></iframe>  
              </div>
            )}
            
          </div>
				</div>
			</div>
		);
	}
}
