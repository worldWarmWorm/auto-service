import history from '../../../images/history.png'
import editing from '../../../images/editing.png'
import remove from '../../../images/delete.png'

export default function PageContent() {
	return (
		<>
			<section className="section section_service">
				<div className="card">
					<div className="table table_vertical">
						<div className="table__head">
							<div className="table__tr">
								<div className="table__th col-2">Название</div>
								<div className="table__th col-10 center">Пробег</div>
							</div>
						</div>
						<div className="table__body">
							<div className="table__tr">
								<div className="table__td col-2 service-name">Моторное масло</div>
								<div className="table__td col-4 last-value">
									<div className="value">47000</div>
									<div className="date secondary">22-12-2023</div>
								</div>
								<div className="table__td col-4 future-value">
									<div className="value">54000</div>
									<div className="date secondary"></div>
								</div>
								<div className="table__td col-2 controller">
									<button className="btn-icon up" type="button"><img src={history} alt="history"></img></button>
									<button className="btn-icon" type="button"><img src={editing} alt="editing"></img></button>
									<button className="btn-icon" type="button"><img src={remove} alt="remove"></img></button>
								</div>
							</div>
							
							<div className="table__tr">
								<div className="table__td col-2 service-name">Свечи зажигания</div>
								<div className="table__td col-4 last-value">
									<div className="value">47000</div>
									<div className="date secondary">22-12-2023</div>
								</div>
								<div className="table__td col-4 future-value">
									<div className="value">54000</div>
									<div className="date secondary"></div>
								</div>
								<div className="table__td col-2 controller">
								<button className="btn-icon up" type="button"><img src={history} alt="history"></img></button>
									<button className="btn-icon" type="button"><img src={editing} alt="editing"></img></button>
									<button className="btn-icon" type="button"><img src={remove} alt="remove"></img></button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button className="btn btn_right">Добавить</button>
			</section>
		</>
	)
}